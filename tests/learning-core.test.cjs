const assert=require('node:assert/strict');
const vm=require('node:vm');const fs=require('node:fs');const core=require('../learning-core.js');
const context={window:{}};vm.runInNewContext(fs.readFileSync(require.resolve('../lessons/philosophy-01.js'),'utf8'),context);
const lesson=JSON.parse(JSON.stringify(context.window.LearningContent.lessons[0]));
assert.deepEqual(core.validate(lesson),[]);assert.equal(lesson.questions.length,24);
let state=918273;const random=()=>{state=(1664525*state+1013904223)>>>0;return state/4294967296};
const positions=[0,0,0,0],orders=new Set(),seen=new Set();
for(let i=0;i<500;i++){
 const d=core.start(lesson,{id:'draft-'+i,now:'2026-11-09T09:00:00.000Z',random});
 assert.equal(d.questions.length,18);assert.equal(new Set(d.questions.map(q=>q.id)).size,18);
 for(const o of lesson.objectives)assert.equal(d.questions.filter(q=>q.objectiveId===o.id).length,3);
 orders.add(d.questions.map(q=>q.id).join(','));
 for(const q of d.questions){seen.add(q.id);assert.equal(new Set(q.choices.map(c=>c.id)).size,4);positions[q.choices.findIndex(c=>c.id===q.correctChoiceId)]++}
}
assert.equal(seen.size,24);assert.equal(orders.size,500);for(const n of positions)assert.ok(n>1800&&n<2700,'Choice positions should span all four slots without a fixed letter cycle.');
const draft=core.start(lesson,{id:'history-1',now:'2026-11-09T09:00:00Z',random});
assert.throws(()=>core.grade(draft,'2026-11-09T09:10:00Z'),/every question/);
function answer(count){draft.questions.forEach((q,i)=>draft.answers[q.id]=i<count?q.correctChoiceId:q.choices.find(c=>c.id!==q.correctChoiceId).id);return core.grade(draft,'2026-11-09T09:10:00Z')}
const pass=answer(15);assert.equal(pass.score,15);assert.equal(pass.passed,true);assert.equal(pass.percent,83.3);assert.equal(pass.completedAt,'2026-11-09T09:10:00Z');assert.equal(pass.review.length,18);
const fail=answer(14);assert.equal(fail.passed,false);assert.equal(fail.percent,77.8);
assert.equal(pass.score,15,'Later answers must not mutate the first result.');assert.equal(pass.review.filter(q=>q.correct).length,15);
const copy=JSON.parse(JSON.stringify(draft));assert.deepEqual(copy.questions,draft.questions);assert.deepEqual(copy.answers,draft.answers);
const retake=core.start(lesson,{id:'history-2',now:'2026-11-10T09:00:00Z',random});assert.notDeepEqual(retake.questions.map(q=>q.id),draft.questions.map(q=>q.id));assert.notEqual(retake.id,pass.id);
const bad=JSON.parse(JSON.stringify(lesson));bad.questions[0].correctChoiceId='missing';assert.ok(core.validate(bad).length);
console.log('Passed: 500 balanced 18-question assessments; distinct shuffles, four answer positions, grading thresholds, missing answers, immutable review snapshots, JSON draft restore, and retake IDs.');
