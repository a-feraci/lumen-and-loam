const assert=require('node:assert/strict');
const vm=require('node:vm');const fs=require('node:fs');const core=require('../learning-core.js');
const context={window:{}};vm.runInNewContext(fs.readFileSync(require.resolve('../lessons/philosophy-01.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(require.resolve('../lessons/ai-ethics-01.js'),'utf8'),context);
assert.equal(context.window.LearningContent.lessons.length,2);
for(const entry of context.window.LearningContent.lessons){
const lesson=JSON.parse(JSON.stringify(entry));
for(const section of lesson.sections)for(const id of section.sourceIds)assert.ok(lesson.sources.some(s=>s.id===id),'Section sources must resolve');
for(const objective of lesson.objectives)assert.ok(lesson.sections.some(s=>s.id===objective.id)||lesson.id==='philosophy-01','Every ethics objective has a teaching section');
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
console.log(lesson.id+': passed 500 balanced assessments, shuffles, grading, missing answers, snapshots, restore, and retakes.');
}
const [philosophy,ethics]=context.window.LearningContent.lessons;
const p=core.start(philosophy,{id:'philosophy-draft',now:'2026-11-09T19:00:00Z'});
const e=core.start(ethics,{id:'ethics-draft',now:'2026-11-09T19:01:00Z'});
p.answers[p.questions[0].id]=p.questions[0].correctChoiceId;
e.answers[e.questions[0].id]=e.questions[0].choices[1].id;
const backup=JSON.parse(JSON.stringify({quizDrafts:{[p.lessonId]:p,[e.lessonId]:e},quizAttempts:[]}));
assert.equal(backup.quizDrafts['philosophy-01'].classId,'philosophy');
assert.equal(backup.quizDrafts['ai-ethics-01'].classId,'ai-ethics');
assert.equal(Object.keys(backup.quizDrafts).length,2);
assert.ok(!p.questions.some(q=>e.questions.some(r=>r.id===q.id)));
assert.equal(backup.quizDrafts[p.lessonId].answers[p.questions[0].id],p.answers[p.questions[0].id]);
console.log('Passed: separate course drafts and answers survive one backup; question IDs do not collide.');
