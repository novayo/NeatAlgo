const mainConfig = {
  app_name: "白話算法",
  app_name_eng: "NeatAlgo",
  subtitle: (
    <>
      用最易懂的方式帶你跨入演算法及資料結構的世界
      <br />
      適合新手、跨領域、學生、刷題者
    </>
  ),
};

const courseConfig = {
  python: {
    name: "Python入門",
    description: "新手需知道的刷題所有 python 基本知識。",
    url: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
    image: "https://hackmd.io/_uploads/Bks1FerEh.png",
  },
  algo_beginner: {
    name: "AL&DS: beginner",
    description:
      "任何人輕鬆入門的演算法和資料結構。學員將依照合理的學習路徑，一步一步熟悉並解出Easy~Medium題目。",
    url: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
    image: "https://hackmd.io/_uploads/Hyp1ClSV2.png",
  },
  algo_advanced: {
    name: "AL&DS: advanced",
    description: "主題式學習不同種類的演算法和資料結構，讓你有能力解出9成Medium題目。",
    url: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
    image: "https://hackmd.io/_uploads/S13E0xB42.png",
  },
  courses_button: {
    type: "internal",
    color: "info",
    label: "了解更多",
  },
};

const routesConfig = {
  button_courses: {
    name: "所有課程",
  },
  button_contact_us: {
    name: "聯絡我們",
    route: "/pages/landing-pages/contact-us",
  },
  button_login: {
    name: "登入",
    route: "/pages/authentication/sign-in",
  },
  button_buy: {
    name: "搶先體驗!",
    route: "https://www.creative-tim.com/product/material-kit-react",
    color: "info",
  },
};

const counterConfig = {
  counter1: {
    count: 30,
    suffix: "+",
    name: "模板",
    description: "整理各式演算法及資料結構的模板與注意事項，讓你不再迷茫",
  },
  counter2: {
    count: 50,
    suffix: "+",
    name: "主題影片",
    description:
      "提供優質且新手向影片，內容涵蓋recursion, dp, dijkstra, trie...等50多種主題，依照合理的學習路徑來熟悉各個演算法及資料結構",
  },
  counter3: {
    count: 150,
    suffix: "+",
    name: "Leetcode實例講解",
    description: "帶你實際應用、強化知識點，學習googler的思維",
  },
};

const informationConfig = {
  card: {
    title1: "什麼是",
    title2: mainConfig.app_name,
    description: "",
  },
  rotate_card: {
    title: "線上教學平台",
    description: "易懂教學、完善題型，學習演算法資料結構、LeetCode的最佳選擇。",
    button_name: "立即訂閱",
  },
  pros_1: {
    name: "學習路徑",
    icon: "content_copy",
    description:
      "通過學習路徑，學習者可以有計劃、有序地進行學習，從而快速掌握演算法和資料結構的知識，提升自己的競爭力。包括各個面向的演算法及資料結構（共50多個篇章）",
  },
  pros_2: {
    name: "新手面向的影片內容",
    icon: "flip_to_front",
    description:
      "以簡潔易懂的方式呈現演算法和資料結構的基礎概念和常見題型。影片中除了講解理論知識外，還包含豐富的範例和實戰演練，讓學習者可以深入理解並熟練應用所學的知識。",
  },
  pros_3: {
    name: "模板及題型",
    icon: "code",
    description:
      "透過模板，學習者可以更有效地理解解題思路和技巧。講解Leetcode題目，學習者可以更深入了解實際應用場景，並學習如何有效地解決Leetcode題目，提升面試及工作上的能力。",
  },
  pros_4: {
    name: "訂閱制",
    icon: "local_atm",
    description:
      "訂閱計劃為期一年，學習者可以不限次數觀看所有影片和課程。透過這個訂閱計劃，學習者可以依自己的學習進度和需求，自由地使用平台上的所有學習資源。",
  },
};

const topicConfig = {
  title1: "超過50種面試主題",
  subtitle1:
    "如果你想要秒殺大部分程式設計面試、精通常見的資料結構和流行的問題解決方法。我們提供了超過150道實例，包含超過50個主題，可以幫助您做好準備。趕快來試試看！",
  title2: "演算法 資料結構",
  subtitle2: "提供學習路徑，以合理的步調踏進軟體工程師的世界。",
};

const faqConfig = {
  name: "常見問題",
  question1: `什麼是${mainConfig.app_name}？`,
  answer1:
    "這個平台是一個教學網站，專門為新手、跨領域者和學生提供易懂的演算法和資料結構教學，同時提供豐富的LeetCode題目練習和解題思路分析，以培養學習者獨立思考和解決問題的能力。",
  question2: `訂閱需要多少錢？`,
  answer2: (
    <>
      訂閱一年：NT$500/月
      <br />
      訂閱一月：NT$830/月
    </>
  ),
  question3: "訂閱後會限制影片或觀看次數嗎？",
  answer3: "不會，訂閱後可以不限次觀看影片及課程。",
  question4: "課程間有什麼差異呢？",
  answer4: (
    <>
      依照課程提供不同難度的主題:
      <br />
      1. python入門 - 不懂程式語言、想學習python者
      <br />
      2. AL&DS: Beginner - 不了解leetcode、不能穩定解出easy者
      <br />
      3. AL&DS: Advanced - 不能穩定解出medium者、想擴展刷題領域者
    </>
  ),
};

const feedbackConfig = {
  name: "使用者回饋",
};

const copyrightConfig = {
  formal_name: `${mainConfig.app_name} ${mainConfig.app_name_eng}`,
  terms_url: "/",
  privacy_url: "/",
};

// TODO: 改Line Sweep圖片
const aldsConfig = {
  segment_tree: {
    name: "Segment Tree",
    image: `https://hackmd.io/_uploads/HJT0BiL42.png`,
    url: "/",
  },
  binary_indexed_tree: {
    name: "Binary Indexed Tree",
    image: `https://hackmd.io/_uploads/rJqcLo8Nn.png`,
    url: "/",
  },
  trie: {
    name: "Trie",
    image: `https://hackmd.io/_uploads/Hyqh8s8V3.png`,
    url: "/",
  },
  floyd_warshall: {
    name: "Floyd Warshall",
    image: `https://hackmd.io/_uploads/HyMIPiUNn.png`,
    url: "/",
  },
  bellman_ford: {
    name: "Bellman Ford",
    image: `https://hackmd.io/_uploads/By8NwiUE3.png`,
    url: "/",
  },
  dijkstra: {
    name: "Dijkstra",
    image: `https://hackmd.io/_uploads/H1qMviI4h.png`,
    url: "/",
  },
  topological_sort: {
    name: "Topological Sort",
    image: `https://hackmd.io/_uploads/rk0PwsL4n.png`,
    url: "/",
  },
  union_find: {
    name: "Union Find",
    image: `https://hackmd.io/_uploads/rJHKvjUEn.png`,
    url: "/",
  },
  prefix_suffix: {
    name: "PrefixSum/SuffixSum",
    image: `https://hackmd.io/_uploads/r1YlujLV3.png`,
    url: "/",
  },
  coin_change: {
    name: "Coin Change",
    image: `https://hackmd.io/_uploads/Hk6M_iL4n.png`,
    url: "/",
  },
  priority_queue: {
    name: "Priority Queue",
    image: `https://hackmd.io/_uploads/HypVOoLEh.png`,
    url: "/",
  },
  kadane: {
    name: "Kadane",
    image: `https://hackmd.io/_uploads/BkcvdjL4n.png`,
    url: "/",
  },
  binary_search: {
    name: "Binary Search",
    image: `https://hackmd.io/_uploads/HkUjuiI43.png`,
    url: "/",
  },
  line_sweep: {
    name: "Line Sweep",
    image: `https://hackmd.io/_uploads/HyrTujUE3.png`,
    url: "/",
  },
  sliding_window: {
    name: "Sliding Window",
    image: `https://hackmd.io/_uploads/Hyy1Ys843.png`,
    url: "/",
  },
  inplace: {
    name: "In-Place",
    image: `https://hackmd.io/_uploads/S1ulFoIE2.png`,
    url: "/",
  },
  backtracking: {
    name: "Backtracking",
    image: `https://hackmd.io/_uploads/SkgQKiIEn.png`,
    url: "/",
  },
  divide_and_conquer: {
    name: "Divide-And-Conquer",
    image: `https://hackmd.io/_uploads/Hk-LtjU42.png`,
    url: "/",
  },
  recursion_memoize: {
    name: "Recursion Memoize",
    image: `https://hackmd.io/_uploads/HkZ5toU42.png`,
    url: "/",
  },
  min_max_recursion: {
    name: "Min/Max Recursion",
    image: `https://hackmd.io/_uploads/ryl2FiLV2.png`,
    url: "/",
  },
  top_down_recursion: {
    name: "Top-down Recursion",
    image: `https://hackmd.io/_uploads/BJ9CKjU4n.png`,
    url: "/",
  },
  bottom_up_recursion: {
    name: "Bottom-up Recursion",
    image: `https://hackmd.io/_uploads/SJHlcjL4h.png`,
    url: "/",
  },
  breadth_first_search: {
    name: "Breadth-First Search",
    image: `https://hackmd.io/_uploads/HyP75o8Vh.png`,
    url: "/",
  },
  depth_first_search: {
    name: "Depth-First Search",
    image: `https://hackmd.io/_uploads/SyLwqsL43.png`,
    url: "/",
  },
  binary_search_tree: {
    name: "Binary Search Tree",
    image: `https://hackmd.io/_uploads/B1Xc5oUNn.png`,
    url: "/",
  },
  binary_tree: {
    name: "Binary Tree",
    image: `https://hackmd.io/_uploads/BkRico842.png`,
    url: "/",
  },
  preorder_traversal: {
    name: "Preorder Traversal",
    image: `https://hackmd.io/_uploads/BJZzji8E2.png`,
    url: "/",
  },
  inorder_traversal: {
    name: "Inorder Traversal",
    image: `https://hackmd.io/_uploads/S1TmioLE3.png`,
    url: "/",
  },
  postorder_traversal: {
    name: "Postorder Traversal",
    image: `https://hackmd.io/_uploads/HkFBsj8Nh.png`,
    url: "/",
  },
  stack: {
    name: "Stack",
    image: `https://hackmd.io/_uploads/H10Doi8V2.png`,
    url: "/",
  },
  queue: {
    name: "Queue",
    image: `https://hackmd.io/_uploads/HyHKssLV2.png`,
    url: "/",
  },
  linked_list: {
    name: "Linked List",
    image: `https://hackmd.io/_uploads/HkpcjsIN2.png`,
    url: "/",
  },
  hash_table_set: {
    name: "Hash Table & Hash set",
    image: `https://hackmd.io/_uploads/HyIhjsIE3.png`,
    url: "/",
  },
  heap_tree: {
    name: "Heap Tree",
    image: `https://hackmd.io/_uploads/Hk4bnjIVn.png`,
    url: "/",
  },
  knapsack: {
    name: "Knapsack",
    image: `https://hackmd.io/_uploads/Bkx72iIVn.png`,
    url: "/",
  },
  patient_sort: {
    name: "Patient Sort",
    image: `https://hackmd.io/_uploads/Bk8Sno8Nn.png`,
    url: "/",
  },
  string_dp: {
    name: "String dp",
    image: `https://hackmd.io/_uploads/ryhLno8E3.png`,
    url: "/",
  },
  palindrome_dp: {
    name: "Palindrome DP",
    image: `https://hackmd.io/_uploads/BJRu3sL4n.png`,
    url: "/",
  },
  monotonic_stack: {
    name: "Monotonic Stack",
    image: `https://hackmd.io/_uploads/rJ4yTjL4h.png`,
    url: "/",
  },
  monotonic_queue: {
    name: "Monotonic Queue",
    image: `https://hackmd.io/_uploads/ByqxTjLN3.png`,
    url: "/",
  },
  quick_select: {
    name: "Quick Select",
    image: `https://hackmd.io/_uploads/rJPGTiI42.png`,
    url: "/",
  },
  ordereddict: {
    name: "OrderedDict",
    image: `https://hackmd.io/_uploads/SJNETsLN3.png`,
    url: "/",
  },
  treemap: {
    name: "Treemap",
    image: `https://hackmd.io/_uploads/BJRrpiINn.png`,
    url: "/",
  },
  astar: {
    name: "A* Search",
    image: `https://hackmd.io/_uploads/By9qaoUE3.png`,
    url: "/",
  },
  find_bipartite: {
    name: "Find Bipartite",
    image: `https://hackmd.io/_uploads/rysppsU4h.png`,
    url: "/",
  },
  bucket_sort: {
    name: "Bucket Sort",
    image: `https://hackmd.io/_uploads/ByjJCsI43.png`,
    url: "/",
  },
  counting_sort: {
    name: "Counting Sort",
    image: `https://hackmd.io/_uploads/HkLWRsUNn.png`,
    url: "/",
  },
  radix_sort: {
    name: "Radix Sort",
    image: `https://hackmd.io/_uploads/rk_fCjUN3.png`,
    url: "/",
  },
  selection_sort: {
    name: "Selection Sort",
    image: `https://hackmd.io/_uploads/SJvB0o8Nh.png`,
    url: "/",
  },
  bubble_sort: {
    name: "Bubble Sort",
    image: `https://hackmd.io/_uploads/HJevCiL43.png`,
    url: "/",
  },
  merge_sort: {
    name: "Merge Sort",
    image: `https://hackmd.io/_uploads/rJft0sUNn.png`,
    url: "/",
  },
  quick_sort: {
    name: "Quick Sort",
    image: `https://hackmd.io/_uploads/S1wq0iIV2.png`,
    url: "/",
  },
  heap_sort: {
    name: "Heap Sort",
    image: `https://hackmd.io/_uploads/SJCi0sLV3.png`,
    url: "/",
  },
  tx_sc: {
    name: "Time Complexity Space Complexity",
    image: `https://hackmd.io/_uploads/r10JJ38En.png`,
    url: "/",
  },
  greedy_candidate: {
    name: "Greedy Candidate",
    image: `https://hackmd.io/_uploads/BJyVknLN3.png`,
    url: "/",
  },
  bitmask: {
    name: "Bitmask",
    image: `https://hackmd.io/_uploads/ByGuJ3IN3.png`,
    url: "/",
  },
};

export {
  mainConfig,
  courseConfig,
  routesConfig,
  counterConfig,
  informationConfig,
  topicConfig,
  faqConfig,
  aldsConfig,
  feedbackConfig,
  copyrightConfig,
};
