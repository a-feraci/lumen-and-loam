/* Original Lumen & Loam teaching case; all case data are fictional. */
window.LearningContent=window.LearningContent||{lessons:[]};
window.LearningContent.lessons.push({
  "id": "ai-ethics-01",
  "classId": "ai-ethics",
  "revision": 1,
  "bankRevision": 1,
  "title": "Should we let the system decide?",
  "subtitle": "AI & Technology Ethics · Lesson 01",
  "minutes": 40,
  "passMark": 80,
  "perObjective": 3,
  "reviewedAt": "2026-11-09",
  "guidingQuestion": "When an AI system makes a useful prediction, what would justify giving it power over people’s choices?",
  "reflectionPrompt": "Your Wayfinder decision: recommendation, two reasons, affected groups, one unresolved question, a safeguard with a named owner, a fair objection, and evidence that would change your mind.",
  "sourceNote": "Original teaching text, fictional cases, and assessment questions. Wayfinder, the settlement, and all figures are invented for learning. The references below support the ethical and risk-management concepts; they do not endorse this fictional proposal. NIST AI RMF 1.0 (2023) is used as a named edition; the NIST landing page reports it is under revision. These frameworks inform inquiry and do not settle every moral disagreement.",
  "objectives": [
    {
      "id": "capability",
      "text": "Separate a prediction, a chosen objective, and a justified decision."
    },
    {
      "id": "stakeholders",
      "text": "Map affected people, benefits, burdens, and missing voices."
    },
    {
      "id": "autonomy",
      "text": "Evaluate meaningful choice, privacy, and proportionate data use."
    },
    {
      "id": "fairness",
      "text": "Explain why an overall performance figure cannot establish fairness."
    },
    {
      "id": "accountability",
      "text": "Identify practical oversight, appeal, and responsibility."
    },
    {
      "id": "judgment",
      "text": "Build a revisable recommendation with evidence and explicit safeguards."
    }
  ],
  "terms": [
    [
      "Prediction",
      "An estimate about an outcome; it does not decide what we ought to do."
    ],
    [
      "Objective",
      "The target a system is designed or configured to pursue."
    ],
    [
      "Stakeholder",
      "Someone affected by a decision or able to influence it, including people who never use the system."
    ],
    [
      "Autonomy",
      "A person’s capacity and practical opportunity to make informed choices."
    ],
    [
      "Data minimization",
      "Collecting and retaining only the data justified by a specified purpose."
    ],
    [
      "Proxy",
      "An indirect stand-in for something we want to measure."
    ],
    [
      "Accountability",
      "Responsibilities and processes through which decisions can be examined, challenged, and corrected."
    ],
    [
      "Automation bias",
      "A tendency to give undue weight to automated advice."
    ]
  ],
  "sections": [
    {
      "id": "capability",
      "title": "1 · A prediction is not a permission slip",
      "sourceIds": [
        "nist-context",
        "oecd-values"
      ],
      "paragraphs": [
        "At the edge of a fictional off-world forest settlement, lanterns mark the last shuttle home. The transit council proposes Wayfinder, an AI system that predicts demand and recommends which evening stops to serve. Its stated objective is to reduce average waiting time with the existing fleet. You are invited to review the proposal before the council gives it authority to cancel stops.",
        "Keep three questions separate. Capability: can it predict demand accurately in this setting? Objective: which outcome has someone told it to optimize? Justification: should the council let that objective govern this decision? A good prediction can help answer the first without settling the other two.",
        "Suppose average waiting time falls because a distant stop is removed. The reported average among remaining riders improves, but some residents lose service. That is not necessarily a broken prediction. It may be a problem with the objective, who is counted, or the decision rule. Technical success and ethical adequacy require different evidence.",
        "AI systems operate within human arrangements: budgets, staffing, incentives, interfaces, and policies. Ethical review therefore asks about the whole service, not just the model. This lesson begins with everyday allocation decisions; it does not assume a system is conscious, a moral person, or capable of bearing institutional responsibility."
      ],
      "example": "Field note: “Wayfinder predicts eight riders at the ridge” is a prediction. “Minimize average wait” is an objective. “Cancel stops below ten predicted riders” is a decision rule selected by people. Ask for reasons for each step."
    },
    {
      "id": "stakeholders",
      "title": "2 · Find the people outside the dashboard",
      "sourceIds": [
        "nist-context",
        "oecd-values"
      ],
      "paragraphs": [
        "List who can benefit, who can be burdened, and who can influence the proposal. Riders, drivers, dispatchers, council staff, maintainers, and nearby residents may all have relevant experience. A resident who cannot use the booking app is still affected by route changes. Paying customers and survey respondents are not the entire public.",
        "For every promised benefit, ask “for whom, compared with what, and at whose expense?” Faster trips for central riders, manageable driver shifts, reliable access for remote residents, and lower energy use are different considerations. A stakeholder map reveals questions; it does not by itself establish how competing claims should be weighted.",
        "Compare credible alternatives, including improving the current dispatch process without AI. Supporters may argue that better demand forecasts can stretch a limited fleet. Critics may argue that low predicted demand hides unmet need. Both claims deserve investigation rather than a contest over who sounds more caring.",
        "Consultation needs a route into the decision. Offer accessible ways to report missed trips, explain how feedback will be used, and record which objections remain unresolved. Hearing everyone does not guarantee agreement, and a majority preference does not erase a minority’s burdens."
      ],
      "example": "Try a missing-voice check: the council surveys only people with completed app bookings. Who cannot appear in that sample? Name a way to hear from them before interpreting the results."
    },
    {
      "id": "autonomy",
      "title": "3 · Choice needs somewhere to go",
      "sourceIds": [
        "oecd-values",
        "nist-privacy"
      ],
      "paragraphs": [
        "Autonomy is more than displaying a consent button. A resident needs understandable information and a practical way to act on a choice. If declining continuous location tracking removes the only usable booking route, “optional” tracking may carry a heavy cost. Whether that arrangement is justified requires reasons about necessity, alternatives, and burdens.",
        "Specify the purpose of each data field. Stop-level trip counts might be enough for a particular demand forecast; a history of exact movements would reveal much more. Ask what extra benefit detailed data provides, whether a less intrusive design can achieve it, who can access it, and when it will be deleted. Minimization is a purpose-based judgment, not a promise to collect no data.",
        "Security and privacy overlap but differ. Strong encryption can help protect stored movements from unauthorized access. It does not by itself justify collecting those movements or reusing them for employee monitoring. Removing names also does not automatically make detailed travel histories impossible to link to a person.",
        "A workable alternative could be a telephone booking route or an accessible kiosk, if it actually offers comparable service. That proposal still needs testing with affected residents and realistic staffing. Calling a fallback “human support” does not make it available at the hour people need it."
      ],
      "example": "Compare two proposals: collect exact location continuously “in case it is useful,” or collect a chosen pickup stop and time window for a stated booking purpose. What evidence could justify collecting more, and what limits would you require?"
    },
    {
      "id": "fairness",
      "title": "4 · The average has blind spots",
      "sourceIds": [
        "nist-fairness",
        "oecd-values"
      ],
      "paragraphs": [
        "In an invented trial, Wayfinder correctly predicts whether demand exceeds a threshold on 90 of 100 central-stop evenings and 10 of 20 ridge-stop evenings. The combined accuracy is 100/120, about 83.3%. That single number conceals 90% accuracy for the central stops and 50% for the ridge. It does not tell us whether missed service or wasted trips cause more harm.",
        "Inspect the kinds of mistakes, the people who bear them, sample sizes, and uncertainty. Twenty ridge observations may leave substantial uncertainty. A performance gap is a reason to investigate; these numbers alone neither establish its cause nor prove intentional discrimination. Equal prediction accuracy would also not settle whether the route allocation itself is fair.",
        "Fairness can involve different defensible priorities: equal treatment under a rule, meeting greater need, protecting minimum access, or distributing burdens. These priorities can conflict under a fixed budget. State which interpretation you use and defend it rather than announcing that one metric measures fairness completely.",
        "A proxy can miss what matters. Completed bookings measure recorded use, not all transport need: residents without app access may be missing. Improving the model on the same incomplete records may preserve the omission. Investigate the data-generating process as well as the algorithm."
      ],
      "example": "Evidence check: 83.3% overall accuracy supports a statement about this invented sample. It does not establish equal service, adequate accessibility, future reliability, or the fairness of cancelling a stop."
    },
    {
      "id": "accountability",
      "title": "5 · Put a real person behind the override",
      "sourceIds": [
        "oecd-accountability",
        "oecd-transparency",
        "nist-core"
      ],
      "paragraphs": [
        "“A human approves every route” is a start, not proof of effective oversight. Does that reviewer have time, relevant information, training, and authority to reject the recommendation? Can they spot errors? A signature added under pressure may become a rubber stamp. Automation bias can make a plausible recommendation feel more authoritative than its evidence warrants.",
        "Assign responsibilities across the lifecycle. The supplier investigates model defects; the transit council owns its deployment policy; dispatchers need an escalation path for operational failures. Distributed work does not mean no one is answerable. Exact legal liability is a separate, jurisdiction-dependent question not resolved by this fictional exercise.",
        "Transparency can help residents understand when AI contributes, what information matters, and how to challenge an outcome. An explanation alone does not restore a missed service. A usable appeal also needs a reachable reviewer, a response time, access to relevant records, and power to correct a decision.",
        "Plan for change. Track missed trips and complaints, compare results with the agreed goals, and define conditions for pausing or reverting the system. Records should enable investigation without becoming an excuse to retain unnecessary personal data. Oversight needs resources after launch as well as promises before it."
      ],
      "example": "Operational test: “Contact support” is incomplete. “The duty dispatcher can restore a stop, reviews urgent reports before the last shuttle, records the reason, and escalates recurring failures to the council” names an owner and an action. Its feasibility still needs checking."
    },
    {
      "id": "judgment",
      "title": "6 · Write a decision you can revise",
      "sourceIds": [
        "nist-core",
        "oecd-accountability"
      ],
      "paragraphs": [
        "Your job is not to declare all AI good or bad. Give a bounded recommendation about this proposal. You might support an advisory-only pilot, require a redesign before any trial, or support a tightly limited deployment if specific evidence and safeguards are available. Different recommendations can be defensible when their reasons and assumptions are explicit.",
        "A strong memo states the decision, separates observed facts from invented assumptions, identifies affected groups, and explains the values used to weigh alternatives. Specify what evidence is still missing, compare at least one realistic alternative, and connect each safeguard to a particular risk and a responsible owner.",
        "For example, an advisory-only pilot could preserve the existing minimum service while testing forecasts, offering accessible feedback, and tracking missed journeys by location. This is a proposal to evaluate, not a guarantee of ethical success. A critic might reasonably ask whether the trial’s staff burden exceeds its benefit or whether the existing service is already inequitable.",
        "Reflection: write 150–250 words recommending a next step for Wayfinder. Give two reasons, a fair objection, one unresolved empirical question, a safeguard with an owner, and evidence that would change your mind. Save it in your AI & Technology Ethics notebook. The assessment checks concepts and reasoning; it does not award points for adopting a preferred political or moral position."
      ],
      "example": "Bridge to Philosophy 01: reuse premises, conclusions, and charitable objections. Here the new work is investigating a concrete system’s objective, stakeholders, data, unequal effects, and decision-making power. The argument tools travel; the casework changes."
    }
  ],
  "recap": [
    "Prediction quality does not determine which objective or decision rule is justified.",
    "Include people missing from usage data and formal consultation.",
    "Meaningful choice needs usable alternatives; secure data collection still needs a purpose.",
    "Inspect distributions, errors, and missing data before interpreting an average.",
    "Oversight and appeal need informed people with authority and resources.",
    "Recommend a bounded next step, name its safeguards, and explain what would change your mind."
  ],
  "connections": [
    {
      "classId": "philosophy",
      "title": "Give your recommendation roots",
      "text": "Use premises, a value assumption, and a charitable objection from Philosophy Lesson 01."
    },
    {
      "classId": "human-tech",
      "title": "When a suggestion becomes authority",
      "text": "Explore trust, automation bias, and whether people can actually challenge an interface."
    },
    {
      "classId": "sociology",
      "title": "Who gets a seat at the council?",
      "text": "Follow the link between participation, institutions, and unequal influence."
    }
  ],
  "tasks": [
    {
      "id": "read",
      "title": "Read AI Ethics 01: Should we let the system decide?",
      "emoji": "📖"
    },
    {
      "id": "memo",
      "title": "Write a Wayfinder decision memo with one safeguard",
      "emoji": "🏮"
    },
    {
      "id": "quiz",
      "title": "Take the AI Ethics 01 assessment",
      "emoji": "✦"
    }
  ],
  "sources": [
    {
      "id": "nist-context",
      "title": "NIST AI RMF 1.0 · Executive summary (2023)",
      "url": "https://airc.nist.gov/airmf-resources/airmf/0-ai-rmf-1-0/"
    },
    {
      "id": "nist-privacy",
      "title": "NIST AI RMF 1.0 · Privacy-enhanced (section 3.6)",
      "url": "https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/"
    },
    {
      "id": "nist-fairness",
      "title": "NIST AI RMF 1.0 · Fairness and harmful bias (section 3.7)",
      "url": "https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/"
    },
    {
      "id": "nist-core",
      "title": "NIST AI RMF 1.0 · Govern, map, measure, manage",
      "url": "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/"
    },
    {
      "id": "oecd-values",
      "title": "OECD AI Principles · Human rights, fairness, and privacy",
      "url": "https://oecd.ai/en/dashboards/ai-principles/P6"
    },
    {
      "id": "oecd-transparency",
      "title": "OECD AI Principles · Transparency and explainability",
      "url": "https://oecd.ai/en/dashboards/ai-principles/P7"
    },
    {
      "id": "oecd-accountability",
      "title": "OECD AI Principles · Accountability",
      "url": "https://oecd.ai/en/dashboards/ai-principles/P9"
    },
    {
      "id": "framework-status",
      "title": "NIST · Framework landing page and revision status",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "questions": [
    {
      "id": "ae-c1",
      "objectiveId": "capability",
      "prompt": "Wayfinder accurately forecasts demand. What remains a separate ethical question?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Whether its stop-cancellation rule is justified."
        },
        {
          "id": "choice-1",
          "text": "Whether its forecast matches the recorded demand."
        },
        {
          "id": "choice-2",
          "text": "Whether its prediction error was measured correctly."
        },
        {
          "id": "choice-3",
          "text": "Whether the trial included the stated time period."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Forecast accuracy does not settle the values or decision rule governing service."
    },
    {
      "id": "ae-c2",
      "objectiveId": "capability",
      "prompt": "Which item is an objective chosen for Wayfinder?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Reduce average waiting time."
        },
        {
          "id": "choice-1",
          "text": "Eight riders are predicted tonight."
        },
        {
          "id": "choice-2",
          "text": "The ridge stop was cancelled yesterday."
        },
        {
          "id": "choice-3",
          "text": "The council received twelve complaints."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "An objective states the target to pursue; the other items are predictions or reports."
    },
    {
      "id": "ae-c3",
      "objectiveId": "capability",
      "prompt": "Average wait improves after a remote stop closes. Which check is most relevant?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Who is excluded from the new average?"
        },
        {
          "id": "choice-1",
          "text": "How can the improved average be rounded?"
        },
        {
          "id": "choice-2",
          "text": "Which interface best displays that average?"
        },
        {
          "id": "choice-3",
          "text": "Can the same result be reported sooner?"
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Removing people from a service can improve a measured average while worsening their access."
    },
    {
      "id": "ae-c4",
      "objectiveId": "capability",
      "prompt": "A council says “The AI selected the target, so the target needs no justification.” What is wrong?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Delegating target selection still needs reasons."
        },
        {
          "id": "choice-1",
          "text": "A target matters only if a human types it."
        },
        {
          "id": "choice-2",
          "text": "Every AI-selected target is necessarily unfair."
        },
        {
          "id": "choice-3",
          "text": "Demand forecasts determine every value choice."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "The need to justify a governing objective remains even if software proposes it."
    },
    {
      "id": "ae-s1",
      "objectiveId": "stakeholders",
      "prompt": "Who belongs in the stakeholder map even without a booking account?",
      "choices": [
        {
          "id": "choice-0",
          "text": "A resident whose local stop may close."
        },
        {
          "id": "choice-1",
          "text": "Only the supplier who sold the model."
        },
        {
          "id": "choice-2",
          "text": "Only people who answered the app survey."
        },
        {
          "id": "choice-3",
          "text": "Only residents with completed bookings."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Affected people can be stakeholders without being users or customers."
    },
    {
      "id": "ae-s2",
      "objectiveId": "stakeholders",
      "prompt": "An app survey reports enthusiastic support. What should the council investigate before generalizing?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Whose experience the survey cannot capture."
        },
        {
          "id": "choice-1",
          "text": "Whether a larger headline conveys the result."
        },
        {
          "id": "choice-2",
          "text": "Whether enthusiasm makes route data unnecessary."
        },
        {
          "id": "choice-3",
          "text": "Which supportive response sounds most confident."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "An app-only survey may omit people unable or unwilling to use the app."
    },
    {
      "id": "ae-s3",
      "objectiveId": "stakeholders",
      "prompt": "Which comparison best helps evaluate the claimed benefit of Wayfinder?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Compare it with a feasible dispatch alternative."
        },
        {
          "id": "choice-1",
          "text": "Compare it only with having no transport at all."
        },
        {
          "id": "choice-2",
          "text": "Compare its logo with the old timetable design."
        },
        {
          "id": "choice-3",
          "text": "Compare two forecasts without checking service."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "A realistic baseline helps reveal benefits, costs, and whether AI is needed."
    },
    {
      "id": "ae-s4",
      "objectiveId": "stakeholders",
      "prompt": "The council hears objections but offers no way for them to affect the decision. What is missing?",
      "choices": [
        {
          "id": "choice-0",
          "text": "A process for considering and responding to input."
        },
        {
          "id": "choice-1",
          "text": "A guarantee that everyone will agree with the result."
        },
        {
          "id": "choice-2",
          "text": "A rule giving the loudest resident the final vote."
        },
        {
          "id": "choice-3",
          "text": "A promise that every objection will stop the project."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Meaningful participation needs an account of how input is considered; it need not guarantee consensus or a veto."
    },
    {
      "id": "ae-a1",
      "objectiveId": "autonomy",
      "prompt": "Tracking is labelled optional, but declining blocks the only usable booking route. What should be examined?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Whether residents have a meaningful alternative."
        },
        {
          "id": "choice-1",
          "text": "Whether the consent button has enough contrast only."
        },
        {
          "id": "choice-2",
          "text": "Whether all data collection must be prohibited."
        },
        {
          "id": "choice-3",
          "text": "Whether agreement proves everyone welcomes tracking."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "A choice with a substantial practical penalty may provide weak control; evaluate necessity and alternatives."
    },
    {
      "id": "ae-a2",
      "objectiveId": "autonomy",
      "prompt": "Which proposal most directly applies data minimization?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Collect the stop and time needed for the booking."
        },
        {
          "id": "choice-1",
          "text": "Collect every movement to allow future analysis."
        },
        {
          "id": "choice-2",
          "text": "Keep exact locations forever after encrypting them."
        },
        {
          "id": "choice-3",
          "text": "Ask for extra identity data to improve the profile."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Minimization ties collection to a specified purpose rather than hypothetical future usefulness."
    },
    {
      "id": "ae-a3",
      "objectiveId": "autonomy",
      "prompt": "The supplier encrypts all location records. What does that establish by itself?",
      "choices": [
        {
          "id": "choice-0",
          "text": "A protection measure, not a reason to collect them."
        },
        {
          "id": "choice-1",
          "text": "That every proposed secondary use is acceptable."
        },
        {
          "id": "choice-2",
          "text": "That records can never be linked to individuals."
        },
        {
          "id": "choice-3",
          "text": "That residents have meaningful control of the service."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Security can protect information without settling whether its collection or reuse is justified."
    },
    {
      "id": "ae-a4",
      "objectiveId": "autonomy",
      "prompt": "A telephone fallback is proposed. Which evidence best tests whether it supports meaningful choice?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Whether residents can obtain comparable service through it."
        },
        {
          "id": "choice-1",
          "text": "Whether its label includes the word “accessible.”"
        },
        {
          "id": "choice-2",
          "text": "Whether the supplier prefers it to a kiosk."
        },
        {
          "id": "choice-3",
          "text": "Whether a phone number appears on the homepage."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "An alternative must work in practice, including its availability and service quality."
    },
    {
      "id": "ae-f1",
      "objectiveId": "fairness",
      "prompt": "The invented trial reports 90/100 correct central predictions and 10/20 correct ridge predictions. Which statement is supported?",
      "choices": [
        {
          "id": "choice-0",
          "text": "The groups have different observed accuracy rates."
        },
        {
          "id": "choice-1",
          "text": "The ridge data prove intentional discrimination."
        },
        {
          "id": "choice-2",
          "text": "The 83.3% overall rate establishes fair allocation."
        },
        {
          "id": "choice-3",
          "text": "Both groups have approximately the same accuracy."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "The observed rates are 90% and 50%; the figures alone do not establish a cause or settle allocation fairness."
    },
    {
      "id": "ae-f2",
      "objectiveId": "fairness",
      "prompt": "Wayfinder predicts demand from completed app bookings. What might that proxy miss?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Transport need among residents without app access."
        },
        {
          "id": "choice-1",
          "text": "The count of completed bookings recorded by the app."
        },
        {
          "id": "choice-2",
          "text": "The number of rows stored in the booking table."
        },
        {
          "id": "choice-3",
          "text": "The stop names explicitly entered in those bookings."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Recorded use can omit unmet need when access to recording is unequal."
    },
    {
      "id": "ae-f3",
      "objectiveId": "fairness",
      "prompt": "Two reviewers favor equal service and greater service for higher need. What should they do first?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Make their fairness criteria explicit and compare implications."
        },
        {
          "id": "choice-1",
          "text": "Assume one metric removes the value disagreement."
        },
        {
          "id": "choice-2",
          "text": "Treat any disagreement as evidence of a model error."
        },
        {
          "id": "choice-3",
          "text": "Choose the criterion with the shortest label."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Fairness involves values; naming the criteria makes tradeoffs open to evaluation."
    },
    {
      "id": "ae-f4",
      "objectiveId": "fairness",
      "prompt": "Prediction accuracy becomes equal across neighborhoods. What follows?",
      "choices": [
        {
          "id": "choice-0",
          "text": "One measured gap closed; allocation still needs review."
        },
        {
          "id": "choice-1",
          "text": "Every resident now has adequate transport access."
        },
        {
          "id": "choice-2",
          "text": "Every source of harmful bias has been eliminated."
        },
        {
          "id": "choice-3",
          "text": "The chosen cancellation threshold is now justified."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Equal accuracy addresses one measure without determining service distribution or decision-rule legitimacy."
    },
    {
      "id": "ae-r1",
      "objectiveId": "accountability",
      "prompt": "Which arrangement offers the strongest practical oversight?",
      "choices": [
        {
          "id": "choice-0",
          "text": "A trained reviewer with time and power to override."
        },
        {
          "id": "choice-1",
          "text": "A reviewer who must approve every output immediately."
        },
        {
          "id": "choice-2",
          "text": "An approval checkbox with no access to evidence."
        },
        {
          "id": "choice-3",
          "text": "A reviewer rewarded solely for approving faster."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Oversight needs information, competence, resources, and authority; mere human presence is insufficient."
    },
    {
      "id": "ae-r2",
      "objectiveId": "accountability",
      "prompt": "A resident receives an explanation but cannot request correction. What remains missing?",
      "choices": [
        {
          "id": "choice-0",
          "text": "A usable appeal with someone able to act."
        },
        {
          "id": "choice-1",
          "text": "A longer description of the same outcome."
        },
        {
          "id": "choice-2",
          "text": "A more confident statement of model accuracy."
        },
        {
          "id": "choice-3",
          "text": "A label saying the decision was automated."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Transparency can aid understanding, while an effective appeal also needs review and corrective power."
    },
    {
      "id": "ae-r3",
      "objectiveId": "accountability",
      "prompt": "Which response best addresses “The supplier built it, so the council has no responsibility”?",
      "choices": [
        {
          "id": "choice-0",
          "text": "The council must answer for its deployment choices."
        },
        {
          "id": "choice-1",
          "text": "Only the dispatcher can have any responsibility."
        },
        {
          "id": "choice-2",
          "text": "Responsibility belongs entirely to the software."
        },
        {
          "id": "choice-3",
          "text": "Every actor has identical duties in every case."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Roles differ: building, deploying, and operating a system each create responsibilities that should be specified."
    },
    {
      "id": "ae-r4",
      "objectiveId": "accountability",
      "prompt": "A reviewer routinely accepts automated routes despite contrary local evidence. Which concern does this illustrate?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Automation bias."
        },
        {
          "id": "choice-1",
          "text": "Data minimization."
        },
        {
          "id": "choice-2",
          "text": "A representative sample."
        },
        {
          "id": "choice-3",
          "text": "A meaningful opt-out."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Undue deference to automated advice can undermine otherwise available human oversight."
    },
    {
      "id": "ae-j1",
      "objectiveId": "judgment",
      "prompt": "Which recommendation is easiest to evaluate and revise?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Trial advice only, with owners, review criteria, and a stop rule."
        },
        {
          "id": "choice-1",
          "text": "Deploy because the model is described as intelligent."
        },
        {
          "id": "choice-2",
          "text": "Reject because every future use must cause harm."
        },
        {
          "id": "choice-3",
          "text": "Launch and decide what success means afterward."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "A bounded proposal defines who acts, what evidence matters, and when to revise or stop."
    },
    {
      "id": "ae-j2",
      "objectiveId": "judgment",
      "prompt": "Which safeguard is most operationally specific?",
      "choices": [
        {
          "id": "choice-0",
          "text": "The duty dispatcher reviews missed-stop reports before the last shuttle."
        },
        {
          "id": "choice-1",
          "text": "A human somewhere can intervene if required."
        },
        {
          "id": "choice-2",
          "text": "The council will remain committed to ethical values."
        },
        {
          "id": "choice-3",
          "text": "The supplier intends to avoid unfavorable outcomes."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "The dispatcher proposal names an owner, a task, and a time; its feasibility can then be checked."
    },
    {
      "id": "ae-j3",
      "objectiveId": "judgment",
      "prompt": "Two learners defend different next steps using evidence and explicit values. How should their reflections be assessed?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Examine the reasons, objections, and revision conditions."
        },
        {
          "id": "choice-1",
          "text": "Award full credit only to the more optimistic verdict."
        },
        {
          "id": "choice-2",
          "text": "Choose whichever verdict agrees with the software."
        },
        {
          "id": "choice-3",
          "text": "Treat disagreement as proof neither learned the concepts."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "Reasoning quality can be assessed without requiring a single preferred verdict in a contested case."
    },
    {
      "id": "ae-j4",
      "objectiveId": "judgment",
      "prompt": "A pilot meets its average-wait target but remote riders report repeated lost access. What is the best next step?",
      "choices": [
        {
          "id": "choice-0",
          "text": "Investigate the reports against the agreed safeguards."
        },
        {
          "id": "choice-1",
          "text": "Dismiss the reports because the average improved."
        },
        {
          "id": "choice-2",
          "text": "Assume the reports establish every possible failure."
        },
        {
          "id": "choice-3",
          "text": "Change the published target to match the result."
        }
      ],
      "correctChoiceId": "choice-0",
      "explanation": "New evidence about burdens can require revision even when a narrow target is met."
    }
  ],
  "caseLab": {
    "title": "The last lantern shuttle",
    "intro": "Case file 01 · Wayfinder / fictional teaching scenario. Before reading the analysis, make a provisional choice. Open each evidence lens, then see whether you would revise it. No live model or simulated outcome is running here.",
    "lenses": [
      {
        "id": "riders",
        "label": "🏮 Riders",
        "title": "A missing journey is still a journey",
        "text": "Remote residents report that the app offers no suitable booking slots. They do not appear in completed-booking counts. The frequency and causes are unknown. Ask how non-app users can report need and how the council will check those reports."
      },
      {
        "id": "model",
        "label": "◈ Model report",
        "title": "83.3% can hide two very different stories",
        "text": "Invented trial: central stops 90/100 correct, ridge stops 10/20 correct. The combined 100/120 is 83.3%, while the group rates are 90% and 50%. Investigate error types, sample uncertainty, and consequences before deciding what the gap means."
      },
      {
        "id": "dispatch",
        "label": "⌘ Dispatch",
        "title": "An override needs more than a button",
        "text": "Dispatchers can technically override a route, but the proposal gives them no extra review time. Ask whether staffing, training, and authority make intervention realistic before calling this meaningful human oversight."
      },
      {
        "id": "data",
        "label": "❧ Data trail",
        "title": "A glowing map can reveal too much",
        "text": "The vendor requests continuous location histories. The council has not documented why stop-level counts are insufficient or how long histories would be kept. Ask for a purpose, necessity evidence, access limits, and a deletion plan."
      }
    ],
    "choices": [
      {
        "id": "advisory",
        "label": "Advisory-only pilot",
        "text": "Possible benefit: gather evidence while retaining existing service decisions. Unresolved: staff burden, data limits, and whether the current service is itself fair. Define monitoring, a reviewer, and a stopping condition."
      },
      {
        "id": "redesign",
        "label": "Redesign before a trial",
        "text": "Possible benefit: resolve missing access and oversight provisions first. Unresolved: delay may preserve current service problems. Name required changes, a review date, and the evidence needed to reconsider."
      },
      {
        "id": "conditional",
        "label": "Conditional deployment",
        "text": "Possible benefit: use forecasts operationally if specified conditions are met. Unresolved: the current file does not demonstrate those conditions. State minimum access, data limits, appeal, and pause criteria before defending this option."
      }
    ]
  },
  "trail": [
    {
      "title": "Privacy, consent & quiet coercion",
      "text": "When does an “optional” feature stop feeling optional?"
    },
    {
      "title": "Fairness under a limited budget",
      "text": "Compare definitions, tradeoffs, and whose needs are counted."
    },
    {
      "title": "Companions, trust & persuasive systems",
      "text": "Explore attachment, agency, and the incentives behind an interface."
    }
  ]
});
