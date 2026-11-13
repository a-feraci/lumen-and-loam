/* Philosophy Foundations curriculum and the revised opening lesson. */
(() => {
 const lesson = LearningContent.lessons.find(item => item.id === 'philosophy-01');
 const units = [
  ['Questions and reasons', ['What makes a good reason?', 'Reading and mapping arguments']],
  ['Knowledge and evidence', ['Belief, knowledge, and justification', 'Testimony, uncertainty, and disagreement']],
  ['Ethics and shared life', ['What makes a choice right?', 'Fair rules and public decisions']],
  ['Reality, identity, and art', ['What makes you the same person?', 'Beauty, art, and interpretation']]
 ];
 const definitions = {
  Philosophy:'the careful study of fundamental questions about reality, knowledge, reasoning, and how we should live',
  Clarification:'making the meaning or scope of a question more precise',
  Ethics:'the study of how we should act and what we owe to others',
  Epistemology:'the study of knowledge and what justifies belief',
  Metaphysics:'the study of fundamental questions about reality, existence, and identity',
  Logic:'the study of how reasons support conclusions',
  Aesthetics:'the study of art, beauty, and how we experience and interpret them',
  'Social and political philosophy':'the study of justice, authority, and how people live together',
  Claim:'a statement that can be true or false',
  Argument:'a group of reasons offered in support of a claim',
  Premise:'a reason offered in support of a conclusion',
  Conclusion:'the claim the reasons are meant to support',
  Inference:'the step from reasons to a conclusion',
  Assumption:'an idea an argument takes for granted, whether or not it is stated',
  'Deductive reasoning':'reasoning that aims to guarantee the conclusion if the premises are true',
  Validity:'a feature of deductive arguments whose premises cannot all be true while the conclusion is false',
  Soundness:'deductive validity together with the actual truth of every premise',
  'Inductive reasoning':'reasoning that supports a conclusion without guaranteeing it',
  Counterexample:'a case that exposes a problem with a general claim, definition, or inference',
  'Charitable objection':'a reasoned challenge to a fair version of someone’s position',
  'Thought experiment':'an imagined case used to test an idea or principle',
  'Empirical question':'a question we can investigate through observation or experience',
  'Normative question':'a question about what should be done, valued, or permitted',
  'Value assumption':'a principle about what matters that connects facts to a recommendation',
  Reply:'a response explaining how an objection affects your reasoning or your proposal',
  'Evidence that could change your mind':'a specific finding that would lead you to revise your position'
 };
 const content = [
  {
   id:'begin',title:'1 · What is philosophy?',sourceIds:['origins','methods'],
   paragraphs:[
    '[[Philosophy]] is the careful study of fundamental questions about reality, knowledge, reasoning, and how we should live. A fundamental question asks about ideas we often take for granted. For example, before deciding whether a school is fair, we can ask what “fair” means.',
    'Imagine a study app that predicts the lessons you’ll enjoy. Should it choose what you learn? You could measure what students enjoy and how much they remember. You would still need to ask whether the school should let an app make that choice. Philosophy helps you examine the concepts, reasons, and values behind a decision.',
    '[[Clarification]] means making the meaning or scope of a question more precise. “Is this a good app?” could mean “Does it help students remember?” or “Is it fair to require it?” A clearer question tells us what to look for. Philosophers across many traditions use methods such as dialogue, argument, and reflection to explore questions like these.'
   ],
   tip:'When you hear “good,” “fair,” or “true,” ask what the word means in this particular situation.',
   map:{label:'From a broad question to a testable one',steps:['“Is this app good?”','Pick one meaning: good for remembering','“Do beginners recall more after a week using it?”']},
   prompts:['What is philosophy, in your own words?','Rewrite “Is technology good?” as one specific question about a particular tool.']
  },
  {
   id:'branches',title:'2 · Six kinds of philosophical question',sourceIds:['overview'],
   paragraphs:['Philosophers often name a branch by the type of question they are investigating. A single technology can raise several questions at once. Compare the questions in this table.'],
   table:{head:['Branch','What it studies','Example question'],rows:[
    ['Ethics','How we should act and what we owe to others.','Should a school require an AI assistant?'],
    ['Epistemology','Knowledge and what justifies belief.','What evidence would justify trusting a recommendation?'],
    ['Metaphysics','Reality, existence, and identity.','Would a digital copy of you still be you?'],
    ['Logic','How reasons support conclusions.','Do higher scores justify making an app compulsory?'],
    ['Aesthetics','Art, beauty, and interpretation.','Can an AI-generated picture have artistic value?'],
    ['Social and political philosophy','Justice, authority, and how people live together.','Who should make rules about a school’s use of AI?']
   ]},
   tip:'Several branches can help with one decision. Evidence about an app belongs alongside questions about fairness and who gets to decide.',
   prompts:['Which branch asks whether a recommendation deserves our trust? What would a useful answer need to include?','Ask two different kinds of philosophical question about a tool you use. Name the branches.']
  },
  {
   id:'arguments',title:'3 · Build an argument from reasons',sourceIds:['arguments'],
   paragraphs:[
    'A [[Claim]] is a statement that can be true or false. “This library promised confidentiality” is a claim. An [[Argument]] is a group of reasons offered in support of a claim.',
    'A [[Premise]] is a reason offered in support of a conclusion. A [[Conclusion]] is the claim the reasons are meant to support. The [[Inference]] is the step from those reasons to the conclusion. Think of a bridge: the premises are the starting side, the conclusion is the destination, and the inference is the route between them.',
    'An [[Assumption]] is an idea an argument takes for granted. “The app improves test scores, so everybody should use it” assumes that improving scores is enough to justify requiring the app. You can ask about accessibility, privacy, and whether students could get the same benefit from a choice of tools.'
   ],
   map:{label:'A worked argument about privacy',steps:[['Premise 1: This library promised confidentiality.','Premise 2: The library should keep its promise by protecting borrowing records.'],'Conclusion: This library should protect its borrowing records.']},
   tip:'“Because” often introduces a reason. “Therefore” often introduces a conclusion. Check what the claim does in the argument.',
   prompts:['In “Protect these notes because you promised to keep them private,” identify the premise and conclusion.','What assumption links “This app improves scores” to “Everyone should be required to use it”? Do you accept it?']
  },
  {
   id:'inference',title:'4 · Check the reasoning and the facts',sourceIds:['arguments','inferences'],
   paragraphs:[
    '[[Deductive reasoning]] aims to guarantee a conclusion if the premises are true. [[Validity]] means the premises cannot all be true while the conclusion is false. [[Soundness]] means the argument is valid and all its premises are actually true.',
    'Imagine two fictional premises: all Mosslings can teleport, and Pip is a Mossling. “Pip can teleport” follows if you grant both premises. The argument is valid. To call it sound, you would also need to establish that its premises are true.',
    '[[Inductive reasoning]] supports a conclusion without guaranteeing it. If a varied group of learners did better using a technique, that gives you some reason to expect similar learners to benefit. One enthusiastic volunteer gives much weaker support for a claim about everybody.'
   ],
   table:{head:['Check','Question to ask'],rows:[['Validity','Could the premises be true and the conclusion still be false?'],['Soundness','Is it valid, and are all the premises actually true?'],['Inductive support','How strongly does the evidence support the prediction, and for whom?']]},
   example:'A lamp glows whenever it has power. You see it glowing. Does power have to be the cause? It could be reflecting moonlight. That possibility shows the inference fails to guarantee its conclusion.',
   prompts:['Why does the teleporting Mossling argument count as valid even if you doubt a premise?','What would make the evidence for a new study technique stronger than one person’s experience?']
  },
  {
   id:'objections',title:'5 · Test an idea fairly',sourceIds:['methods'],
   paragraphs:[
    'A [[Counterexample]] is a case that exposes a problem with a general claim. One useful but frustrating practice session challenges “Every useful learning activity is enjoyable.” You could revise the claim to “Enjoyment can help people keep practicing.”',
    'A [[Charitable objection]] is a reasoned challenge to a fair version of someone’s position. First restate the idea in a way its supporter would recognize. Then identify a premise, assumption, or consequence that deserves scrutiny.',
    'A [[Thought experiment]] is an imagined case used to test an idea. Suppose an app helps everyone but requires collecting their private notes. Would you still make it mandatory? Your answer can reveal which values matter to you. A study of real students would be needed to find out whether the app actually helps everyone.'
   ],
   tip:'Before disagreeing, try “Here’s what I think you’re saying. Did I get it right?”',
   prompts:['Give a counterexample to “Every useful study tool is easy to use.”','What is a fair objection to “Every student should have access to an AI study assistant”? Start by restating the claim accurately.']
  },
  {
   id:'application',title:'6 · Decide what the school should do',sourceIds:['overview','methods'],
   paragraphs:[
    'A fictional school is considering requiring an AI study assistant. One student wants everyone to benefit from extra support. Another wants learners to control their notes and choose how they study. Your task is to give your own provisional recommendation.',
    'An [[Empirical question]] can be investigated through observation or experience. “Did students remember more after using the assistant for four weeks?” is empirical. A [[Normative question]] asks what should be done, valued, or permitted. “Should use of the assistant be mandatory?” is normative.',
    'A [[Value assumption]] is a principle about what matters that connects facts to a recommendation. A [[Reply]] explains how an objection affects your reasoning or changes your proposal. [[Evidence that could change your mind]] is a specific finding that would lead you to revise your position. Say what you would need to learn and what you would do differently if you learned it.'
   ],
   table:{head:['Piece of the reflection','Worked example'],rows:[
    ['Conclusion','Offer the assistant to all students as an optional tool.'],
    ['Premise 1','The school wants every student to be able to get extra study support.'],
    ['Premise 2','A required tool limits students’ choice even when another study method suits them.'],
    ['Value assumption','When students can get comparable support by choice, their autonomy should carry weight.'],
    ['Fair objection','Some students who could benefit may never try an optional tool.'],
    ['Reply','Give everyone a guided demonstration and let them decide afterward.'],
    ['Evidence that could change my mind','If a four-week comparison found a large learning benefit for beginners that optional use could not match, with equivalent privacy protections, I would consider a limited required trial.']
   ]},
   tip:'The case is fictional. Label any factual assumption as tentative. You can say what research would test it.',
   exercise:'Write 150–250 words using the seven pieces in the worked example. You can support a requirement, recommend optional use, or defend a different policy. Start with the numbered questions below, then turn your answers into a short reflection.',
   prompts:[
    'What should the school do? Give two premises that support your conclusion.',
    'What value assumption connects your reasons to your recommendation?',
    'What is a fair objection? How would you reply?',
    'What specific evidence could change your mind, and how would you revise your recommendation?'
   ]
  }
 ];
 lesson.revision = 2;
 lesson.unit = 1;
 lesson.number = 1;
 lesson.subtitle = 'Philosophy Foundations · Unit 1 · Lesson 1';
 lesson.sections = content;
 lesson.terms = Object.entries(definitions);
 lesson.reflectionPrompt = '1. My recommendation\n2. Premise 1 and premise 2\n3. Value assumption\n4. Fair objection\n5. Reply\n6. Evidence that could change my mind';
 lesson.sourceNote = 'The teaching text and fictional examples are original. OpenStax supports the philosophy concepts. The IES practice guide informed the use of worked examples, retrieval questions, and visuals with explanations.';
 lesson.sources.push({id:'practice',title:'IES · Organizing Instruction and Study to Improve Student Learning',url:'https://ies.ed.gov/ncee/wwc/PracticeGuide/1'});
 lesson.cardExamples = {
  Philosophy:'Ask what “fair” means before judging a school’s policy.',
  Clarification:'Replace “Is this app good?” with “Does it improve recall after a week?”',
  Epistemology:'What evidence would justify trusting the app’s recommendation?',
  Argument:'The library promised confidentiality, so it should protect borrowing records.',
  Premise:'“You promised to keep these notes private” is a reason for protecting them.',
  Conclusion:'“Protect these notes” is what the promise is offered to support.',
  Inference:'If the library promised privacy and promises should be kept, the library should protect the records.',
  Assumption:'“This app improves scores, so require it” assumes scores justify compulsory use.',
  Validity:'If all Mosslings teleport and Pip is a Mossling, Pip must teleport if those premises are true.',
  Soundness:'A valid argument needs true premises before it counts as sound.',
  Counterexample:'A useful but frustrating practice session challenges “every useful activity is enjoyable.”',
  'Value assumption':'When comparable support is available, student choice should carry weight.',
  Reply:'Offer a guided demonstration and let students decide afterward.',
  'Evidence that could change your mind':'A large learning gain that optional use could not match could justify considering a limited trial.'
 };
 const term = word => '<strong><dfn>' + esc(word) + '</dfn></strong>';
 function formatParagraph(text) {
  const marker = text.match(/^\[\[([^\]]+)\]\]/);
  if (!marker) return esc(text);
  const key = marker[1];
  const definition = definitions[key];
  // Match the author’s sentence before highlighting its definition.
  const rest = text.slice(marker[0].length);
  const line = rest.match(/^ (is|means|aims to|supports|can be|asks|explains) ([^.]+)(\.|$)/);
  if (!line || !definition) return term(key) + esc(rest.replace(/\[\[|\]\]/g,''));
  return term(key) + ' ' + esc(line[1]) + ' <mark class="lesson-definition">' + esc(line[2]) + '</mark>' + esc(rest.slice(line[0].length - line[3].length).replace(/\[\[([^\]]+)\]\]/g,'$1'));
 }
 function inline(text) {
  return text.split(/(?=\[\[)/).map(formatParagraph).join('');
 }
 function tableMarkup(table, section) {
  if (!table) return '';
  return '<div class="lesson-table-wrap"><table><thead><tr>' + table.head.map(heading => '<th scope="col">' + esc(heading) + '</th>').join('') + '</tr></thead><tbody>' +
   table.rows.map(([label,...cells]) => '<tr><th scope="row">' + (section === 'branches' ? term(label) : esc(label)) + '</th>' +
    cells.map((cell,i) => '<td>' + (section === 'branches' && i === 0 ? '<mark class="lesson-definition">' + esc(cell) + '</mark>' : esc(cell)) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
 }
 function sectionBody(section) {
  const map = section.map ? '<figure class="argument-map"><figcaption>' + esc(section.map.label) + '</figcaption><ol>' + section.map.steps.map(step => '<li>' + (Array.isArray(step) ? step.map(reason => '<div>' + esc(reason) + '</div>').join('') : esc(step)) + '</li>').join('') + '</ol></figure>' : '';
  const prompts = '<div class="lesson-prompts"><h3>Questions to answer</h3><ol>' + section.prompts.map((prompt,i) =>
   '<li><span>' + esc(prompt) + '</span> <button type="button" class="text-button" data-philosophy-prompt="' + section.id + '/' + i + '">Add to notebook</button></li>').join('') + '</ol></div>';
  return '<div data-narration>' + section.paragraphs.map(p => '<p>' + inline(p) + '</p>').join('') +
   tableMarkup(section.table,section.id) + map +
   (section.example ? '<div class="lesson-example">' + esc(section.example) + '</div>' : '') +
   '<p class="lesson-tip"><strong>★ Study tip</strong> ' + esc(section.tip) + '</p>' +
   (section.exercise ? '<p class="lesson-example">' + esc(section.exercise) + '</p>' : '') + '</div>' + prompts;
 }
 function outline() {
  return '<section class="card curriculum"><h2>Course outline</h2><p>A class contains units, each unit contains lessons, and each lesson contains short sections.</p><ol>' +
   units.map(([name,lessons],i) => '<li><h3>Unit ' + (i+1) + ' · ' + esc(name) + '</h3><ol>' +
    lessons.map((title,j) => '<li>' + (i===0&&j===0 ? '<a href="#lesson/philosophy-01">' + esc(title) + '</a> <small>Available</small>' : esc(title) + ' <small>Planned</small>') + '</li>').join('') + '</ol></li>').join('') + '</ol></section>';
 }
 document.addEventListener('click',event => {
  const button = event.target.closest('[data-philosophy-prompt]');
  if (!button) return;
  const [id,index] = button.dataset.philosophyPrompt.split('/');
  const section = content.find(item => item.id === id);
  const prompt = section?.prompts[index];
  if (!prompt) return;
  const book = data.notebooks.find(item => item.id === 'philosophy');
  noteModal('','','Philosophy foundations',book?.id || '',{
   key:'prompt/philosophy-01/' + id + '/' + index,
   title:section.title + ' · Question ' + (Number(index)+1),
   body:prompt + '\n\nMy answer\n'
  });
 });
 window.PhilosophyGuide = {sectionBody,outline};
})();
