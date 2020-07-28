const assessment = {
  security: {
    domain: "hungry-ritchie-09b906.netlify.app",
    consumer_key: "yis0TYCu7U9V4o7M",
    timestamp: "20200728-0900",
    user_id: "student_00012",
    signature:
      "d8a8e79a2ed61f90a064694e6a87cd0409a9d75bc47b923d54496720fd85f2a8",
  },
  request: {
    rendering_type: "assess",
    type: "submit_practice",
    name: "Items API Quickstart",
    state: "initial",
    user_id: "student_00012",
    activity_template_id: "quickstart_examples_activity_template_001",
    session_id: "c22e23b0-8c0b-4f06-90cb-d7510bb31088",
    activity_id: "quickstart_examples_activity_001",
  },
};

const authoring = {
  security: {
    domain: "hungry-ritchie-09b906.netlify.app",
    consumer_key: "yis0TYCu7U9V4o7M",
    timestamp: "20200728-0937",
    signature:
      "6df5b39838f1aa57e78f91717a0556a3762259113dacace5873d475634cbe431",
  },
  request: {
    mode: "item_list",
    "title.show": true,
    user: { id: "author123456" },
  },
};

const analytics = {
  security: {
    domain: "hungry-ritchie-09b906.netlify.app",
    consumer_key: "yis0TYCu7U9V4o7M",
    timestamp: "20200728-0939",
    signature:
      "3fc976ea85c7720da3f673fc3832ecfc5abc5d58fd0ba1aaaf9a29a8c88d23fd",
  },
  request: {
    reports: [
      {
        type: "sessions-summary",
        id: "quickstart-report-1",
        user_id: "student_0001",
        session_ids: ["ef4f80b8-e281-41f4-9efd-349b7eb9dd37"],
      },
      {
        type: "sessions-summary-by-tag",
        id: "quickstart-report-2",
        user_id: "student_0001",
        session_ids: ["ef4f80b8-e281-41f4-9efd-349b7eb9dd37"],
        hierarchy: "quickstart_examples_hierarchy_001",
      },
    ],
  },
};
