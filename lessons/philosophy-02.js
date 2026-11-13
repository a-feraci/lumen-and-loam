/* One question per learning goal. */
(() => {
 const title = 'Reading and mapping arguments';
 const practice = 'The community center’s weekend art class filled up, so it should add a weekday class. Identify the reason and conclusion, name an assumption about weekday demand, then give a fair objection and a reply.';
 const lesson = {
  id:'philosophy-02', classId:'philosophy', unit:1, number:2, revision:1, bankRevision:1,
  title, subtitle:'Philosophy Foundations · Unit 1 · Lesson 2',
  guidingQuestion:'How can we show which reasons support a conclusion and where the reasoning needs another step?',
  warmup:'Recall what a premise, conclusion, and assumption do. In “Leave the porch light on because a guest is arriving after dark,” identify the conclusion, then say one idea the speaker takes for granted.',
  minutes:20, passMark:80, perObjective:1, reviewedAt:'2026-11-12',
  objectives:[
   {id:'m1',text:'Identify reasons and a conclusion in either sentence order.'},
   {id:'m2',text:'Draw or describe what each reason supports.'},
   {id:'m3',text:'Distinguish reasons that work separately from reasons that work together.'},
   {id:'m4',text:'State an unstated assumption and explain why it matters.'},
   {id:'m5',text:'Place a fair objection where it applies and revise the recommendation or the argument.'}
  ],
  sections:[
   {
    id:'find-support', title:'1 · Find the claim the reasons support', sourceIds:['arguments'],
    paragraphs:[
     'An [[argument map]] is a diagram that shows which claims support which other claims. Read “Keep the library open until 8 p.m. because some students finish work at 6 and need a place to study afterward.” Start with the conclusion. Draw an arrow to it from the reason.',
     'Now start the passage with the reason and say “so keep the library open until 8 p.m.” The same reason still supports the same conclusion.'
    ],
    map:{label:'A reason points to the conclusion',steps:['Some students need a place to study after work.','Keep the library open until 8 p.m.']},
    mapDescription:'Some students need a place to study after work. That is the reason offered for keeping the library open until eight.',
    tip:'Read each arrow as “is offered as a reason for.” The arrow shows what the speaker is trying to support. You can still ask whether the reason is enough.',
    prompts:['What is the library being asked to do?','Put the conclusion last. Which sentence now gives the reason?','Give a reason someone might offer for the same conclusion and say where it goes on the map.']
   },
   {
    id:'linked-reasons', title:'2 · Check whether the reasons need each other', sourceIds:['arguments'],
    paragraphs:[
     '[[Independent reasons]] are reasons that each offer some support on their own. One student needs a quiet room after work. Another needs access to the library’s computers after dinner. Each gives some reason to consider later hours.',
     '[[Linked reasons]] are reasons that work together to support a conclusion. Suppose the proposal is “Try a later opening on Thursdays.” One reason says the trial needs a second staff member and any day with two staff members can be used. The other says Thursdays are the only days with two staff members available. Together they support choosing Thursday if the library runs a trial. Evidence of student demand still helps justify running it at all.'
    ],
    supportMap:{
     label:'Two ways reasons support a conclusion',
     examples:[
      {label:'Independent reasons', reasons:['Students need quiet after work.','Students need computers after dinner.'], conclusion:'Consider staying open later.'},
      {label:'Linked reasons', linked:true, reasons:['The trial needs two staff members.','Two staff members are available only on Thursdays.'], conclusion:'If the library runs the trial, choose Thursday.'}
     ]
    },
    mapDescription:'The need for quiet and the need for computers each give their own reason for staying open later. The staffing rule and the staff member’s availability go together when choosing Thursday.',
    tip:'Cover one reason. Ask what the remaining reason still supports.',
    prompts:['Which example gives two separate reasons for staying open late?','Cover the sentence about when the staff member is available. What can you still conclude about Thursday?','Give two reasons for one small change in a shared space. Explain whether each helps by itself.']
   },
   {
    id:'assumption-objection', title:'3 · Find the assumption and place the objection', sourceIds:['arguments','methods'],
    paragraphs:[
     '“The library is busy at 5 p.m., so it should stay open until 8 every weekday.” One [[assumption]] is an idea an argument takes for granted. Here the speaker may be assuming that some of the demand at five continues after the current closing time.',
     'A fair objection could challenge that connection. The room might be full at five because a class just ended. One reply is to survey students about when they would actually use the library and try one late evening before proposing a full-week change.'
    ],
    map:{label:'Where the objection applies',steps:['Reason: The library is busy at 5 p.m.','Assumption: Some of that demand continues after closing. Objection: The five o’clock crowd may be here because a class just ended.','Reply: Check demand after closing before expanding hours.']},
    mapDescription:'The five o’clock crowd is offered as a reason to stay open later. The objection challenges the assumption that a crowd at five predicts demand after closing. The reply proposes checking demand and narrowing the trial.',
    prompts:['What does the five o’clock crowd tell us directly?','What would have to be true for the crowd to support later hours?','Write a fair objection aimed at that connection. What could the library check or change?'],
    practice,
    practiceFeedback:['Assumption: Name something that needs to be true for a full weekend class to tell you about weekday demand.','Objection: Identify the claim or connection you challenge and explain why. A timing or access concern can count.','Reply: Gather evidence or revise the proposal in a way that addresses your objection.']
   }
  ],
  terms:[
   ['Argument map','A diagram that shows which claims support which other claims.'],
   ['Independent reasons','Reasons that each offer some support on their own.'],
   ['Linked reasons','Reasons that work together to support a conclusion.'],
   ['Assumption','An idea an argument takes for granted.']
  ],
  cardAliases:{
   'Argument map':'A picture of how an argument’s reasons fit together',
   'Independent reasons':'Separate reasons that still help if you remove one',
   'Linked reasons':'Reasons that need each other for this inference',
   'Assumption':'Something the speaker is counting on being true'
  },
  cardExamples:{
   'Argument map':'A reason about students needing study space points to “Stay open until 8.”',
   'Independent reasons':'Quiet space and computer access each give a reason for later hours.',
   'Linked reasons':'The staffing rule and Thursday availability support choosing Thursday for the trial.',
   'Assumption':'The five o’clock crowd indicates demand after closing.'
  },
  cardVisuals:{
   'Independent reasons':'Quiet space → later hours\nComputer access → later hours',
   'Linked reasons':'Staffing rule + Thursday availability → choose Thursday if the trial runs'
  },
  recap:['Find the conclusion and ask what reasons are offered for it.','Check whether each reason helps alone or needs another reason.','Name what the argument takes for granted. Aim objections and replies at the relevant connection.'],
  reflectionBody:practice + '\n\nReason\n\nConclusion\n\nAssumption\n\nFair objection\n\nReply\n',
  connections:[{classId:'logic',title:'How reasons support a conclusion',text:'Follow the distinction between a reason, an inference, and the claim it supports.'}],
  tasks:[
   {id:'read',title:'Read Philosophy 02: Reading and mapping arguments',emoji:'📖'},
   {id:'reflect',title:'Map the community center argument',emoji:'▤'},
   {id:'quiz',title:'Try the five-question Philosophy 02 check',emoji:'✦'}
  ],
  sources:[
   {id:'arguments',title:'OpenStax · 5.3 Arguments',url:'https://openstax.org/books/introduction-philosophy/pages/5-3-arguments'},
   {id:'methods',title:'OpenStax · 5.1 Philosophical Methods for Discovering Truth',url:'https://openstax.org/books/introduction-philosophy/pages/5-1-philosophical-methods-for-discovering-truth'}
  ],
  sourceNote:'The library and community center examples are fictional. The textbook sections give more background on reasoning and argument structure.',
  questions:[
   ['m1','“Post the opening hours online. People often arrive after closing.” What is the conclusion?',
    'Post the opening hours online.','People often arrive after closing.','The hours have already been posted.','People should arrive after closing.',
    'The recommendation comes first. The late arrivals give the reason.'],
   ['m2','“The study room is quiet, so let’s hold the review there.” Where does the support arrow point?',
    'From “The study room is quiet” to “Hold the review there.”','In the opposite direction.','Both ways.','From the word “so” to “quiet.”',
    'Read the arrow as “is offered as a reason for.”'],
   ['m3','“A booking gives a group permission to use the room. Our group has a booking.” How do the reasons support the conclusion that our group has permission?',
    'They work together.','Either reason establishes permission by itself.','The rule alone shows that our group booked.','The two statements oppose each other.',
    'The rule says what a booking gives us, and the second reason says we have one.'],
   ['m4','“The evening art class filled, so a morning class would fill too.” What is one assumption?',
    'Enough people interested in the class could attend in the morning.','The evening class filled.','The morning class has already filled.','The evening class charged a fee.',
    'The prediction depends on demand at a different time.'],
   ['m5','Someone points out that people on the art class waitlist work mornings. Which reply addresses that objection?',
    'Check which times the waitlisted people can attend before adding a session.','Repeat that the evening class filled.','Ask whether people liked the class supplies.','Book a bigger morning room.',
    'The objection concerns timing, so check when learners are available.']
  ].map(([id,prompt,...answers]) => ({
   id,objectiveId:id,prompt,correctChoiceId:'choice-0',
   choices:answers.slice(0,4).map((text,i)=>({id:'choice-'+i,text})),
   explanation:answers[4]
  }))
 };
 LearningContent.lessons.push(lesson);
})();
