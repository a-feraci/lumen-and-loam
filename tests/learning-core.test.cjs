const assert=require('node:assert/strict');
const vm=require('node:vm');const fs=require('node:fs');const core=require('../learning-core.js');
const context={document:{addEventListener(){}}};
context.window=context;
vm.createContext(context);
for(const name of ['philosophy-01','ai-ethics-01','philosophy-guide','philosophy-02']){
 vm.runInContext(fs.readFileSync(require.resolve('../lessons/'+name+'.js'),'utf8'),context);
}
assert.equal(context.LearningContent.lessons.length,3);
for(const entry of context.LearningContent.lessons){
const lesson=JSON.parse(JSON.stringify(entry));
for(const section of lesson.sections)for(const id of section.sourceIds)assert.ok(lesson.sources.some(s=>s.id===id),'Section sources must resolve');
if(lesson.classId==='ai-ethics')for(const objective of lesson.objectives)assert.ok(lesson.sections.some(s=>s.id===objective.id),'Every ethics objective has a teaching section');
const count=lesson.objectives.length*lesson.perObjective;
const passing=Math.ceil(lesson.passMark*count/100);
assert.deepEqual(core.validate(lesson),[]);
assert.equal(count,lesson.id==='philosophy-02'?5:18);
assert.equal(lesson.questions.length,lesson.id==='philosophy-02'?5:24);
let state=918273;const random=()=>{state=(1664525*state+1013904223)>>>0;return state/4294967296};
const positions=[0,0,0,0],orders=new Set(),seen=new Set();
for(let i=0;i<500;i++){
 const d=core.start(lesson,{id:'draft-'+i,now:'2026-11-09T09:00:00.000Z',random});
 assert.equal(d.questions.length,count);assert.equal(new Set(d.questions.map(q=>q.id)).size,count);
 for(const o of lesson.objectives)assert.equal(d.questions.filter(q=>q.objectiveId===o.id).length,lesson.perObjective);
 orders.add(d.questions.map(q=>q.id).join(','));
 for(const q of d.questions){seen.add(q.id);assert.equal(new Set(q.choices.map(c=>c.id)).size,4);positions[q.choices.findIndex(c=>c.id===q.correctChoiceId)]++}
}
assert.equal(seen.size,lesson.questions.length);assert.ok(orders.size>1);for(const n of positions)assert.ok(n>count*100&&n<count*150,'Choice positions should span all four slots without a fixed letter cycle.');
const draft=core.start(lesson,{id:'history-1',now:'2026-11-09T09:00:00Z',random});
assert.throws(()=>core.grade(draft,'2026-11-09T09:10:00Z'),/every question/);
function answer(count){draft.questions.forEach((q,i)=>draft.answers[q.id]=i<count?q.correctChoiceId:q.choices.find(c=>c.id!==q.correctChoiceId).id);return core.grade(draft,'2026-11-09T09:10:00Z')}
const pass=answer(passing);assert.equal(pass.score,passing);assert.equal(pass.passed,true);assert.equal(pass.percent,Math.round(passing/count*1000)/10);assert.equal(pass.completedAt,'2026-11-09T09:10:00Z');assert.equal(pass.review.length,count);
const fail=answer(passing-1);assert.equal(fail.passed,false);
assert.equal(pass.score,passing,'Later answers must not mutate the first result.');assert.equal(pass.review.filter(q=>q.correct).length,passing);
const copy=JSON.parse(JSON.stringify(draft));assert.deepEqual(copy.questions,draft.questions);assert.deepEqual(copy.answers,draft.answers);
const retake=core.start(lesson,{id:'history-2',now:'2026-11-10T09:00:00Z',random});assert.notDeepEqual(retake.questions.map(q=>q.id),draft.questions.map(q=>q.id));assert.notEqual(retake.id,pass.id);
const bad=JSON.parse(JSON.stringify(lesson));bad.questions[0].correctChoiceId='missing';assert.ok(core.validate(bad).length);
console.log(lesson.id+': passed 500 balanced assessments, shuffles, grading, missing answers, snapshots, restore, and retakes.');
}
const [philosophy,ethics,lesson2]=context.LearningContent.lessons;
assert.equal(philosophy.revision,3);assert.equal(philosophy.bankRevision,2);
assert.ok(!philosophy.questions.some(q=>lesson2.questions.some(r=>r.id===q.id)));
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
