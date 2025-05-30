const report  = {
  message: {
    timestamp: 1747916554136,
    type: 'end-of-call-report',
    analysis: {
      summary: "The caller asked about the capital of India, and Eva informed them that it's New Delhi. The call ended when the customer hung up after receiving this information.",
      successEvaluation: 'true'
    },
    artifact: {
      messages: [Array],
      messagesOpenAIFormatted: [Array],
      transcript: 'AI: Hi, Chiku. I am Eva. How can I assist you today?\n' +
        'User: Yeah. Hi. Um, first to capital of India.\n' +
        "AI: The capital of India is New Delhi. There anything else you'd like to know?\n",
      recordingUrl: 'https://storage.vapi.ai/2ba804fa-d872-4be9-b437-6a591669be59-1747916552579-86d9f764-ec60-4bfa-ad91-f66258a7ffc6-mono.wav',
      stereoRecordingUrl: 'https://storage.vapi.ai/2ba804fa-d872-4be9-b437-6a591669be59-1747916552579-653ea2f3-1b04-4812-963a-986d41d5467d-stereo.wav',
      recording: [Object]
    },
    startedAt: '2025-05-22T12:22:17.328Z',
    endedAt: '2025-05-22T12:22:30.076Z',
    endedReason: 'customer-ended-call',
    cost: 0.0205,
    costBreakdown: {
      stt: 0.004,
      llm: 0.0002,
      tts: 0.0041,
      vapi: 0.0106,
      total: 0.0205,
      llmPromptTokens: 209,
      llmCompletionTokens: 33,
      ttsCharacters: 138,
      voicemailDetectionCost: 0,
      knowledgeBaseCost: 0,
      analysisCostBreakdown: [Object]
    },
    costs: [
        
 {
  type: 'transcriber',
  transcriber: { provider: 'deepgram', model: 'nova-2' },
  minutes: 0.43751666666666666,
  cost: 0.00547167
},
  {
  type: 'model',
  model: { provider: 'openai', model: 'gpt-3.5-turbo' },
  promptTokens: 269,
  completionTokens: 40,
  cost: 0.0001945
},
  {
  type: 'voice',
  voice: {
    provider: 'cartesia',
    voiceId: '3b554273-4299-48b9-9aaf-eefd438e3941',
    model: 'sonic-2'
  },
  characters: 149,
  cost: 0.00447
},
  { type: 'vapi', 
    subType: 'normal',
     minutes: 0.3675,
      cost: 0.018375
 },
 {
  type: 'analysis',
  analysisType: 'summary',
  model: { provider: 'anthropic', model: 'claude-3-7-sonnet-20250219' },
  promptTokens: 140,
  completionTokens: 35,
  cost: 0.000945
},
  {
  type: 'analysis',
  analysisType: 'successEvaluation',
  model: { provider: 'anthropic', model: 'claude-3-7-sonnet-20250219' },
  promptTokens: 238,
  completionTokens: 4,
  cost: 0.000774
},
  {
  type: 'knowledge-base',
  model: { provider: 'google', model: 'gemini-1.5-flash' },
  promptTokens: 0,
  completionTokens: 0,
  cost: 0
}
    ],

    durationMs: 12748,
    durationSeconds: 12.748,
    durationMinutes: 0.2125,
    summary: "The caller asked about the capital of India, and Eva informed them that it's New Delhi. The call ended when the customer hung up after receiving this information.",
    transcript: 'AI: Hi, Chiku. I am Eva. How can I assist you today?\n' +
      'User: Yeah. Hi. Um, first to capital of India.\n' +
      "AI: The capital of India is New Delhi. There anything else you'd like to know?\n",
    messages: [ [Object], [Object], [Object], [Object] ],
    recordingUrl: 'https://storage.vapi.ai/2ba804fa-d872-4be9-b437-6a591669be59-1747916552579-86d9f764-ec60-4bfa-ad91-f66258a7ffc6-mono.wav',
    stereoRecordingUrl: 'https://storage.vapi.ai/2ba804fa-d872-4be9-b437-6a591669be59-1747916552579-653ea2f3-1b04-4812-963a-986d41d5467d-stereo.wav',
    call: {
      id: '2ba804fa-d872-4be9-b437-6a591669be59',
      orgId: '18ef73e8-4485-442d-8879-e7ac350291c6',
      createdAt: '2025-05-22T12:22:09.405Z',
      updatedAt: '2025-05-22T12:22:09.405Z',
      type: 'webCall',
      monitor: [Object],
      transport: [Object],
      webCallUrl: 'https://vapi.daily.co/xgm1pW77ARFfyWsp03pO',
      status: 'queued',
      assistantId: '2ef3f149-e8d4-4c15-bdc3-994e8b31d0c4'
    },
    assistant: {
      id: '2ef3f149-e8d4-4c15-bdc3-994e8b31d0c4',
      orgId: '18ef73e8-4485-442d-8879-e7ac350291c6',
      name: 'Eva-1747916420162',
      voice: [Object],
      createdAt: '2025-05-22T12:20:20.644Z',
      updatedAt: '2025-05-22T12:20:20.644Z',
      updatedAt: '2025-05-22T12:20:20.644Z',
      model: [Object],
      firstMessage: 'Hi chiku! I am Eva! How can I assist you today?',
      serverMessages: [Array],
      firstMessageMode: 'assistant-speaks-first',
      server: [Object]
    }
  }
}
 