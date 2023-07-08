import imageCoursePythonBackground from "assets/images/office-dark.jpg";
import imageAlgoAStarSearch from "assets/neatalgo/algo_astar_search.png";
import imageAlgoBacktracking from "assets/neatalgo/algo_backtracking.png";
import imageAlgoBellmanFord from "assets/neatalgo/algo_bellman_ford.png";
import imageAlgoBinaryIndexedTree from "assets/neatalgo/algo_binary_index_tree.png";
import imageAlgoBinarySearch from "assets/neatalgo/algo_binary_search.png";
import imageAlgoBinarySearchTree from "assets/neatalgo/algo_binary_search_tree.png";
import imageAlgoBinaryTree from "assets/neatalgo/algo_binary_tree.png";
import imageAlgoBitmask from "assets/neatalgo/algo_bitmask.png";
import imageAlgoBottomUpRecursion from "assets/neatalgo/algo_bottom_up_recursion.png";
import imageAlgoBreadthFirstSearch from "assets/neatalgo/algo_breadth_first_search.png";
import imageAlgoBubbleSort from "assets/neatalgo/algo_bubble_sort.png";
import imageAlgoBucketSort from "assets/neatalgo/algo_bucket_sort.png";
import imageAlgoCoinChange from "assets/neatalgo/algo_coin_change.png";
import imageAlgoCountingSort from "assets/neatalgo/algo_counting_sort.png";
import imageAlgoDepthFirstSearch from "assets/neatalgo/algo_depth_first_search.png";
import imageAlgoDijkstra from "assets/neatalgo/algo_dijkstra.png";
import imageAlgoDivideAndConquer from "assets/neatalgo/algo_divide_and_conquer.png";
import imageAlgoFindBipartite from "assets/neatalgo/algo_find_bipartite.png";
import imageAlgoFloydWarshall from "assets/neatalgo/algo_floyd_warshall.png";
import imageAlgoGreedy from "assets/neatalgo/algo_greedy.png";
import imageAlgoHashTableSet from "assets/neatalgo/algo_hash_table_set.png";
import imageAlgoHeapSort from "assets/neatalgo/algo_heap_sort.png";
import imageAlgoHeapTree from "assets/neatalgo/algo_heap_tree.png";
import imageAlgoInplace from "assets/neatalgo/algo_in_place.png";
import imageAlgoInorderTraversal from "assets/neatalgo/algo_inorder_traversal.png";
import imageAlgoKadane from "assets/neatalgo/algo_kadane.png";
import imageAlgoKnapsack from "assets/neatalgo/algo_knapsack.png";
import imageAlgoLineSweep from "assets/neatalgo/algo_line_sweep.png";
import imageAlgoLinkedList from "assets/neatalgo/algo_linked_list.png";
import imageAlgoMajorityVote from "assets/neatalgo/algo_majority_vote.png";
import imageAlgoMergeSort from "assets/neatalgo/algo_merge_sort.png";
import imageAlgoMinMaxRecursion from "assets/neatalgo/algo_min_max_recursion.png";
import imageAlgoMonotonicQueue from "assets/neatalgo/algo_monotonic_queue.png";
import imageAlgoMonotonicStack from "assets/neatalgo/algo_monotonic_stack.png";
import imageAlgoOrderedDict from "assets/neatalgo/algo_ordereddict.png";
import imageAlgoPalindroneDP from "assets/neatalgo/algo_palindrome_dp.png";
import imageAlgoPatientSort from "assets/neatalgo/algo_patient_sort.png";
import imageAlgoPostorderTraversal from "assets/neatalgo/algo_postorder_traversal.png";
import imageAlgoPrefixSuffixSum from "assets/neatalgo/algo_prefix_suffix_sum.png";
import imageAlgoPreorderTraversal from "assets/neatalgo/algo_preorder_traversal.png";
import imageAlgoPriorityQueue from "assets/neatalgo/algo_prioirity_queue.png";
import imageAlgoQueue from "assets/neatalgo/algo_queue.png";
import imageAlgoQuickSelect from "assets/neatalgo/algo_quick_select.png";
import imageAlgoQuickSort from "assets/neatalgo/algo_quick_sort.png";
import imageAlgoRadixSort from "assets/neatalgo/algo_radix_sort.png";
import imageAlgoRecursionMemoize from "assets/neatalgo/algo_recursion_memoize.png";
import imageAlgoSegementTree from "assets/neatalgo/algo_segment_tree.png";
import imageAlgoSelectionSort from "assets/neatalgo/algo_selection_sort.png";
import imageAlgoSlidingWindow from "assets/neatalgo/algo_sliding_window.png";
import imageAlgoStack from "assets/neatalgo/algo_stack.png";
import imageAlgoStringDP from "assets/neatalgo/algo_string_dp.png";
import imageAlgoTimeSpaceComplexity from "assets/neatalgo/algo_time_space_complexity.png";
import imageAlgoTopDownRecursion from "assets/neatalgo/algo_top_down_recursion.png";
import imageAlgoTopologicalSort from "assets/neatalgo/algo_topological_sort.png";
import imageAlgoTreemap from "assets/neatalgo/algo_treemap.png";
import imageAlgoTrie from "assets/neatalgo/algo_trie.png";
import imageAlgoUnionFind from "assets/neatalgo/algo_union_find.png";
import imagePresentationAlgoAdvanced from "assets/neatalgo/presentation_algo_advanced.png";
import imagePresentationAlgoBeginner from "assets/neatalgo/presentation_algo_beginner.png";
import imagePresentationBackground from "assets/neatalgo/presentation_background.png";
import imagePresentationInformationRotateCardBack from "assets/neatalgo/presentation_information_rotate_card_back.jpeg";
import imagePresentationInformationRotateCardFront from "assets/neatalgo/presentation_information_rotate_card_front.jpeg";
import imagePresentationPythonCourse from "assets/neatalgo/presentation_python_course.png";
import { ENV } from "helper";

const mainConfig = {
  app_name: "白話算法",
  app_name_eng: "NeatAlgo",
  main_page_img: imagePresentationBackground,
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
    image: imagePresentationPythonCourse,
    backgroundImage: imageCoursePythonBackground,
    url: ENV()["course_settings"]["python"][0]["url"],
  },
  algo_beginner: {
    name: "AL&DS: beginner",
    description:
      "任何人輕鬆入門的演算法和資料結構。學員將依照合理的學習路徑，一步一步熟悉並解出Easy~Medium題目。",
    image: imagePresentationAlgoBeginner,
    backgroundImage: imageCoursePythonBackground,
    url: ENV()["course_settings"]["algo_beginner"][0]["url"],
  },
  algo_advanced: {
    name: "AL&DS: advanced",
    description: "主題式學習不同種類的演算法和資料結構，讓你有能力解出9成Medium題目。",
    image: imagePresentationAlgoAdvanced,
    backgroundImage: imageCoursePythonBackground,
    url: ENV()["course_settings"]["algo_advanced"][0]["url"],
  },
};

const navConfig = {
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
    route: ENV()["route_settings"]["page_contact_us"],
  },
  button_login: {
    name: "登入",
    route: ENV()["route_settings"]["page_sign_in"],
  },
  button_buy: {
    name: "搶先體驗!",
    route: ENV()["route_settings"]["page_purchase"],
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
    image_front: imagePresentationInformationRotateCardFront,
    image_back: imagePresentationInformationRotateCardBack,
    url: ENV()["route_settings"]["page_purchase"],
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
  question2: `訂閱需要多少錢？會自動續訂嗎？`,
  answer2: (
    <>
      我們的平台提供年繳和月繳的訂閱選項，我們保證不會自動續訂，讓使用者能夠安心使用。
      <br />
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

// TODO: 重構url
const pricingConfig = {
  url: ENV()["route_settings"]["page_purchase"],
  pay_url: ENV()["route_settings"]["pay_third_party"],
};

// Footer
// pdf: src/routes.js
const copyrightConfig = {
  formal_name: `${mainConfig.app_name} ${mainConfig.app_name_eng}`,
  terms_url: ENV()["route_settings"]["page_terms"],
  terms_refund_url: ENV()["route_settings"]["page_refund_terms"],
  terms_refund_page: 10,
  privacy_url: ENV()["route_settings"]["page_privacy"],
};

const contactUsConfig = {
  title: "聯絡我們",
  subtitle:
    "有任何問題或疑慮？我們樂意回答你的問題並提供協助。請填寫下方表格，我們會儘快與你聯絡。期待與你的交流！同時，我們非常歡迎您的回饋意見，以幫助我們不斷改進和提升服務品質。",
  username: "名稱",
  email: "電子郵件",
  content_name: "請告訴我們您的問題或回饋，我們樂意協助您。",
  default_text: "請提供您的問題或回饋意見。",
  submit_button: "送出",
  url: ENV()["route_settings"]["page_contact_us"],
};

const signInConfig = {
  title: "登入",
  subtitle: "請輸入您的電子郵件和密碼以進行登入。",
  email: "電子郵件",
  password: "密碼",
  remeber_me_button: "記住我",
  submit_button: "登入",
  register_text: "還沒有帳號嗎？",
  register_button: "註冊",
};

const aldsConfig = {
  // beginner
  tc_sc: {
    name: "Time Complexity Space Complexity",
    image: imageAlgoTimeSpaceComplexity,
    url: courseConfig.algo_beginner.url,
  },
  hash_table_set: {
    name: "Hash Table & Hash set",
    image: imageAlgoHashTableSet,
    url: courseConfig.algo_beginner.url,
  },
  linked_list: {
    name: "Linked List",
    image: imageAlgoLinkedList,
    url: courseConfig.algo_beginner.url,
  },
  queue: {
    name: "Queue",
    image: imageAlgoQueue,
    url: courseConfig.algo_beginner.url,
  },
  stack: {
    name: "Stack",
    image: imageAlgoStack,
    url: courseConfig.algo_beginner.url,
  },
  binary_tree: {
    name: "Binary Tree",
    image: imageAlgoBinaryTree,
    url: courseConfig.algo_beginner.url,
  },
  binary_search_tree: {
    name: "Binary Search Tree",
    image: imageAlgoBinarySearchTree,
    url: courseConfig.algo_beginner.url,
  },
  preorder_traversal: {
    name: "Preorder Traversal",
    image: imageAlgoPreorderTraversal,
    url: courseConfig.algo_beginner.url,
  },
  inorder_traversal: {
    name: "Inorder Traversal",
    image: imageAlgoInorderTraversal,
    url: courseConfig.algo_beginner.url,
  },
  postorder_traversal: {
    name: "Postorder Traversal",
    image: imageAlgoPostorderTraversal,
    url: courseConfig.algo_beginner.url,
  },
  breadth_first_search: {
    name: "Breadth-First Search",
    image: imageAlgoBreadthFirstSearch,
    url: courseConfig.algo_beginner.url,
  },
  depth_first_search: {
    name: "Depth-First Search",
    image: imageAlgoDepthFirstSearch,
    url: courseConfig.algo_beginner.url,
  },
  recursion_memoize: {
    name: "Recursion Memoize",
    image: imageAlgoRecursionMemoize,
    url: courseConfig.algo_beginner.url,
  },
  top_down_recursion: {
    name: "Top-down Recursion",
    image: imageAlgoTopDownRecursion,
    url: courseConfig.algo_beginner.url,
  },
  bottom_up_recursion: {
    name: "Bottom-up Recursion",
    image: imageAlgoBottomUpRecursion,
    url: courseConfig.algo_beginner.url,
  },
  inplace: {
    name: "In-Place",
    image: imageAlgoInplace,
    url: courseConfig.algo_beginner.url,
  },
  backtracking: {
    name: "Backtracking",
    image: imageAlgoBacktracking,
    url: courseConfig.algo_beginner.url,
  },
  divide_and_conquer: {
    name: "Divide-And-Conquer",
    image: imageAlgoDivideAndConquer,
    url: courseConfig.algo_beginner.url,
  },
  prefix_suffix: {
    name: "PrefixSum/SuffixSum",
    image: imageAlgoPrefixSuffixSum,
    url: courseConfig.algo_beginner.url,
  },
  binary_search: {
    name: "Binary Search",
    image: imageAlgoBinarySearch,
    url: courseConfig.algo_beginner.url,
  },
  priority_queue: {
    name: "Priority Queue",
    image: imageAlgoPriorityQueue,
    url: courseConfig.algo_beginner.url,
  },
  greedy: {
    name: "Greedy",
    image: imageAlgoGreedy,
    url: courseConfig.algo_beginner.url,
  },
  trie: {
    name: "Trie",
    image: imageAlgoTrie,
    url: courseConfig.algo_beginner.url,
  },
  sliding_window: {
    name: "Sliding Window",
    image: imageAlgoSlidingWindow,
    url: courseConfig.algo_beginner.url,
  },
  selection_sort: {
    name: "Selection Sort",
    image: imageAlgoSelectionSort,
    url: courseConfig.algo_beginner.url,
  },
  bubble_sort: {
    name: "Bubble Sort",
    image: imageAlgoBubbleSort,
    url: courseConfig.algo_beginner.url,
  },
  merge_sort: {
    name: "Merge Sort",
    image: imageAlgoMergeSort,
    url: courseConfig.algo_beginner.url,
  },
  quick_sort: {
    name: "Quick Sort",
    image: imageAlgoQuickSort,
    url: courseConfig.algo_beginner.url,
  },
  // advanced
  min_max_recursion: {
    name: "Min/Max Recursion",
    image: imageAlgoMinMaxRecursion,
    url: courseConfig.algo_advanced.url,
  },
  segment_tree: {
    name: "Segment Tree",
    image: imageAlgoSegementTree,
    url: courseConfig.algo_advanced.url,
  },
  binary_indexed_tree: {
    name: "Binary Indexed Tree",
    image: imageAlgoBinaryIndexedTree,
    url: courseConfig.algo_advanced.url,
  },
  floyd_warshall: {
    name: "Floyd Warshall",
    image: imageAlgoFloydWarshall,
    url: courseConfig.algo_advanced.url,
  },
  bellman_ford: {
    name: "Bellman Ford",
    image: imageAlgoBellmanFord,
    url: courseConfig.algo_advanced.url,
  },
  dijkstra: {
    name: "Dijkstra",
    image: imageAlgoDijkstra,
    url: courseConfig.algo_advanced.url,
  },
  topological_sort: {
    name: "Topological Sort",
    image: imageAlgoTopologicalSort,
    url: courseConfig.algo_advanced.url,
  },
  union_find: {
    name: "Union Find",
    image: imageAlgoUnionFind,
    url: courseConfig.algo_advanced.url,
  },
  coin_change: {
    name: "Coin Change",
    image: imageAlgoCoinChange,
    url: courseConfig.algo_advanced.url,
  },
  kadane: {
    name: "Kadane",
    image: imageAlgoKadane,
    url: courseConfig.algo_advanced.url,
  },
  line_sweep: {
    name: "Line Sweep",
    image: imageAlgoLineSweep,
    url: courseConfig.algo_advanced.url,
  },
  heap_tree: {
    name: "Heap Tree",
    image: imageAlgoHeapTree,
    url: courseConfig.algo_advanced.url,
  },
  knapsack: {
    name: "Knapsack",
    image: imageAlgoKnapsack,
    url: courseConfig.algo_advanced.url,
  },
  patient_sort: {
    name: "Patient Sort",
    image: imageAlgoPatientSort,
    url: courseConfig.algo_advanced.url,
  },
  string_dp: {
    name: "String dp",
    image: imageAlgoStringDP,
    url: courseConfig.algo_advanced.url,
  },
  palindrome_dp: {
    name: "Palindrome DP",
    image: imageAlgoPalindroneDP,
    url: courseConfig.algo_advanced.url,
  },
  monotonic_stack: {
    name: "Monotonic Stack",
    image: imageAlgoMonotonicStack,
    url: courseConfig.algo_advanced.url,
  },
  monotonic_queue: {
    name: "Monotonic Queue",
    image: imageAlgoMonotonicQueue,
    url: courseConfig.algo_advanced.url,
  },
  quick_select: {
    name: "Quick Select",
    image: imageAlgoQuickSelect,
    url: courseConfig.algo_advanced.url,
  },
  ordereddict: {
    name: "OrderedDict",
    image: imageAlgoOrderedDict,
    url: courseConfig.algo_advanced.url,
  },
  treemap: {
    name: "Treemap",
    image: imageAlgoTreemap,
    url: courseConfig.algo_advanced.url,
  },
  astar: {
    name: "A* Search",
    image: imageAlgoAStarSearch,
    url: courseConfig.algo_advanced.url,
  },
  find_bipartite: {
    name: "Find Bipartite",
    image: imageAlgoFindBipartite,
    url: courseConfig.algo_advanced.url,
  },
  bucket_sort: {
    name: "Bucket Sort",
    image: imageAlgoBucketSort,
    url: courseConfig.algo_advanced.url,
  },
  counting_sort: {
    name: "Counting Sort",
    image: imageAlgoCountingSort,
    url: courseConfig.algo_advanced.url,
  },
  radix_sort: {
    name: "Radix Sort",
    image: imageAlgoRadixSort,
    url: courseConfig.algo_advanced.url,
  },
  heap_sort: {
    name: "Heap Sort",
    image: imageAlgoHeapSort,
    url: courseConfig.algo_advanced.url,
  },
  majority_vote: {
    name: "Majority vote",
    image: imageAlgoMajorityVote,
    url: courseConfig.algo_advanced.url,
  },
  bitmask: {
    name: "Bitmask",
    image: imageAlgoBitmask,
    url: courseConfig.algo_advanced.url,
  },
};

export {
  aldsConfig,
  contactUsConfig,
  copyrightConfig,
  counterConfig,
  courseConfig,
  faqConfig,
  feedbackConfig,
  informationConfig,
  mainConfig,
  navConfig,
  pricingConfig,
  routesConfig,
  signInConfig,
  topicConfig,
};
