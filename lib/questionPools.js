// lib/questionPools.js

// Each question object format:
// { q: "Question text", options: ["A", "B", "C", "D"], a: correctOptionIndex }

export const APTITUDE_POOL_150 = [
  // ---------------------------
  // Arithmetic & Quantitative
  // ---------------------------
  { q: "If 12 men can complete a work in 8 days, how many men are required to complete it in 6 days?", options: ["10", "14", "16", "18"], a: 2 },
  { q: "The average of 10 numbers is 20. If each number is doubled, the new average is?", options: ["20", "30", "40", "50"], a: 2 },
  { q: "The compound interest on ₹10,000 at 10% per annum for 2 years is?", options: ["₹2000", "₹2100", "₹2200", "₹2300"], a: 1 },
  { q: "What is the LCM of 48, 64 and 80?", options: ["240", "480", "960", "1440"], a: 2 },
  { q: "A shopkeeper buys an article for ₹500 and sells it at 20% profit. The selling price is?", options: ["₹600", "₹550", "₹520", "₹480"], a: 0 },
  { q: "If the price of sugar increases by 25%, how much % consumption must be reduced to keep expenditure constant?", options: ["10%", "15%", "20%", "25%"], a: 2 },
  { q: "A train 120 m long crosses a pole in 12 seconds. Its speed is?", options: ["30 km/h", "36 km/h", "40 km/h", "45 km/h"], a: 1 },
  { q: "Two pipes can fill a tank in 20 min and 30 min. Both opened together, time to fill tank?", options: ["10", "12", "15", "18"], a: 1 },
  { q: "Ratio of ages of A and B is 4:5. After 5 years it will be 5:6. Current ages?", options: ["20,25", "25,30", "30,35", "35,40"], a: 0 },
  { q: "The probability of drawing a red card from a standard deck is?", options: ["1/2", "1/4", "1/3", "2/3"], a: 0 },

  // ---------------------------
  // Logical Reasoning
  // ---------------------------
  { q: "All cats are dogs. Some dogs are tigers. Conclusion?", options: ["All cats are tigers", "Some cats are tigers", "Some tigers are dogs", "None"], a: 2 },
  { q: "Find the odd one out: 2, 6, 12, 20, 30, 42", options: ["6", "20", "30", "42"], a: 1 },
  { q: "If A is brother of B, and B is sister of C, then A is?", options: ["Brother of C", "Uncle of C", "Father of C", "None"], a: 0 },
  { q: "Find missing number: 1, 4, 9, 16, 25, ?", options: ["30", "35", "36", "49"], a: 2 },
  { q: "Arrange: Kitchen, Kitten, King, Kite", options: ["King, Kitchen, Kitten, Kite", "King, Kite, Kitchen, Kitten", "King, Kitten, Kitchen, Kite", "Kitchen, King, Kite, Kitten"], a: 0 },
  { q: "Statements: All books are pens. Some pens are papers. Conclusion?", options: ["All books are papers", "Some pens are books", "Some books are not pens", "None"], a: 1 },
  { q: "If 2 + 3 = 25, 3 + 4 = 49, 4 + 5 = ?", options: ["64", "81", "100", "121"], a: 2 },
  { q: "Which doesn’t belong? Apple, Mango, Orange, Potato", options: ["Apple", "Mango", "Orange", "Potato"], a: 3 },
  { q: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?", options: ["4", "5", "6", "7"], a: 0 },
  { q: "If all roses are flowers, some flowers fade quickly. Then?", options: ["All roses fade quickly", "Some flowers are roses", "Some roses fade quickly", "None"], a: 3 },

  // ---------------------------
  // Data Interpretation & Puzzles
  // ---------------------------
  { q: "If population increases by 5% annually, then population after 2 years =?", options: ["P(1.05)", "P(1.10)", "P(1.1025)", "P(1.15)"], a: 2 },
  { q: "If distance = 240 km and speed = 60 km/h, time taken?", options: ["2 h", "3 h", "4 h", "5 h"], a: 2 },
  { q: "Solve: (144 ÷ 12) + (13 × 2)", options: ["28", "30", "32", "34"], a: 1 },
  { q: "Median of [7, 9, 3, 5, 11]", options: ["5", "7", "9", "11"], a: 1 },
  { q: "LCM of 18 and 24 is?", options: ["36", "48", "72", "96"], a: 2 },



  // 👉 Continue this same pattern until you have 150 aptitude questions.




  // ---------------------------
  // Quantitative Aptitude (50)
  // ---------------------------
  { q: "If 12 men can complete a work in 8 days, how many men are required to complete it in 6 days?", options: ["10", "14", "16", "18"], a: 2 },
  { q: "A shopkeeper buys an article for ₹500 and sells it at 20% profit. The selling price is?", options: ["₹600", "₹550", "₹520", "₹480"], a: 0 },
  { q: "If the price of sugar increases by 25%, how much % consumption must be reduced to keep expenditure constant?", options: ["10%", "15%", "20%", "25%"], a: 2 },
  { q: "A train 120 m long crosses a pole in 12 seconds. Its speed is?", options: ["30 km/h", "36 km/h", "40 km/h", "45 km/h"], a: 1 },
  { q: "Two pipes can fill a tank in 20 min and 30 min. Both opened together, time to fill tank?", options: ["10", "12", "15", "18"], a: 1 },
  { q: "Ratio of ages of A and B is 4:5. After 5 years it will be 5:6. Current ages?", options: ["20,25", "25,30", "30,35", "35,40"], a: 0 },
  { q: "The probability of drawing a red card from a standard deck is?", options: ["1/2", "1/4", "1/3", "2/3"], a: 0 },
  { q: "A can complete a job in 12 days, B in 15 days. Working together, time required?", options: ["6 days", "6.67 days", "7 days", "8 days"], a: 1 },
  { q: "The average of 10 numbers is 20. If each number is doubled, the new average is?", options: ["20", "30", "40", "50"], a: 2 },
  { q: "The compound interest on ₹10,000 at 10% per annum for 2 years is?", options: ["₹2000", "₹2100", "₹2200", "₹2300"], a: 1 },
  { q: "What is the LCM of 48, 64 and 80?", options: ["240", "480", "960", "1440"], a: 2 },
  { q: "If x% of 200 = 50, then x = ?", options: ["10", "20", "25", "30"], a: 2 },
  { q: "A train crosses a 180 m bridge in 30 seconds at 54 km/h. Length of train?", options: ["150m", "180m", "200m", "210m"], a: 2 },
  { q: "If a discount of 10% is given on an article, selling price is ₹270. Find marked price.", options: ["₹270", "₹300", "₹320", "₹330"], a: 1 },
  { q: "If the cost price of 12 pens is equal to selling price of 10 pens, profit %?", options: ["16%", "18%", "20%", "25%"], a: 2 },
  { q: "Speed of boat in still water 15 km/h, current speed 5 km/h. Time to go 60 km downstream?", options: ["2h", "3h", "4h", "5h"], a: 2 },
  { q: "Find the missing term: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], a: 0 },
  { q: "The difference between simple and compound interest on ₹5000 at 10% for 2 years is?", options: ["₹40", "₹50", "₹60", "₹70"], a: 0 },
  { q: "A man spends 2/5 of his income on food, 3/10 on rent and saves the rest. Savings %?", options: ["25%", "30%", "35%", "40%"], a: 0 },
  { q: "If SP = ₹240, Profit = 20%, then CP = ?", options: ["₹180", "₹190", "₹200", "₹220"], a: 2 },
  { q: "Two numbers are in the ratio 3:5. If their sum is 64, the larger number is?", options: ["24", "30", "40", "48"], a: 2 },
  { q: "If a sum triples in 20 years at SI, in how many years will it double?", options: ["6.67", "8", "10", "12"], a: 2 },
  { q: "A man can row 6 km/h in still water. If current is 2 km/h, effective speed upstream?", options: ["2", "4", "6", "8"], a: 1 },
  { q: "If 40% of a number is 50, the number is?", options: ["100", "120", "125", "150"], a: 2 },
  { q: "A person covers half distance at 30 km/h, half at 60 km/h. Average speed?", options: ["40", "45", "50", "55"], a: 1 },
  { q: "If SP is 20% more than CP, profit %?", options: ["15%", "18%", "20%", "25%"], a: 2 },
  { q: "A sum of money doubles in 8 years at SI. In how many years will it triple?", options: ["12", "16", "20", "24"], a: 2 },
  { q: "Simplify: (144 ÷ 12) + (13 × 2)", options: ["28", "30", "32", "34"], a: 1 },
  { q: "If x:y = 2:3, y:z = 4:5, then x:y:z = ?", options: ["8:12:15", "2:3:5", "4:6:5", "10:15:18"], a: 0 },
  { q: "Probability of getting a sum of 7 on two dice?", options: ["1/6", "1/8", "1/12", "1/18"], a: 0 },
  { q: "Solve: (25 × 25) − (15 × 15)", options: ["400", "500", "600", "700"], a: 0 },
  { q: "Find the simple interest on ₹2000 for 3 years at 5%.", options: ["₹200", "₹250", "₹300", "₹350"], a: 2 },
  { q: "Speed of train = 72 km/h. Find distance covered in 15 minutes.", options: ["15 km", "18 km", "20 km", "25 km"], a: 1 },
  { q: "The sum of first 20 natural numbers is?", options: ["200", "210", "220", "230"], a: 1 },
  { q: "A man sold an article at a gain of 12%. If sold for ₹112, CP = ?", options: ["₹90", "₹95", "₹100", "₹105"], a: 2 },
  { q: "A pipe fills a tank in 4 hours, another empties in 6. Time together?", options: ["6", "8", "10", "12"], a: 2 },
  { q: "If a:b = 3:4 and b:c = 5:6, then a:b:c = ?", options: ["15:20:24", "5:6:7", "4:5:6", "3:5:6"], a: 0 },
  { q: "If population increases 5% annually, population after 2 years is?", options: ["P×1.05", "P×1.10", "P×1.1025", "P×1.15"], a: 2 },
  { q: "Average age of 24 boys is 15 years. A teacher joins, average becomes 16. Age of teacher?", options: ["36", "38", "40", "42"], a: 2 },
  { q: "Two numbers differ by 20% of the smaller. Ratio larger:smaller?", options: ["4:5", "5:4", "6:5", "5:6"], a: 1 },
  { q: "If perimeter of square = 24 cm, area = ?", options: ["12", "24", "36", "36"], a: 2 },
  { q: "Area of circle radius 7 cm = ?", options: ["154", "144", "164", "140"], a: 0 },
  { q: "If CP = ₹800 and SP = ₹960, gain %?", options: ["15%", "18%", "20%", "25%"], a: 2 },
  { q: "If two dice are rolled, probability of at least one 6?", options: ["11/36", "12/36", "13/36", "1/2"], a: 0 },
  { q: "The mean of 5 numbers is 18. If one number is excluded, mean is 16. Excluded number?", options: ["24", "26", "28", "30"], a: 1 },
  { q: "Compound interest on ₹5000 at 8% for 1 year compounded half-yearly?", options: ["₹400", "₹404", "₹408", "₹412"], a: 2 },
  { q: "If 3 pens = 2 pencils, 5 pencils = 4 erasers, then 3 pens = ? erasers", options: ["2", "3", "4", "5"], a: 2 },
  { q: "If a sum becomes ₹2700 in 3 years and ₹3000 in 4 years at SI, sum = ?", options: ["₹2000", "₹2200", "₹2400", "₹2500"], a: 2 },
  { q: "If speed increases from 30 to 40 km/h, time decreases by 2 hours. Distance?", options: ["120", "140", "160", "180"], a: 2 },

  // ---------------------------
  // Logical Reasoning (50)
  // ---------------------------
  { q: "All cats are dogs. Some dogs are tigers. Conclusion?", options: ["All cats are tigers", "Some cats are tigers", "Some tigers are dogs", "None"], a: 2 },
  { q: "Find the odd one out: 3, 7, 11, 15, 19", options: ["3", "7", "11", "15"], a: 3 },
  { q: "If P = 16, Q = 81, then R = ?", options: ["64", "81", "100", "121"], a: 2 },
  { q: "If 2+3=25, 3+4=49, then 4+5=?", options: ["64", "81", "100", "121"], a: 2 },
  { q: "Arrange in dictionary order: King, Kitchen, Kite, Kitten", options: ["King, Kitchen, Kitten, Kite", "Kitchen, King, Kitten, Kite", "King, Kitten, Kitchen, Kite", "Kitten, King, Kitchen, Kite"], a: 0 },
  { q: "Statements: Some cats are dogs. All dogs are lions. Conclusion?", options: ["All cats are lions", "Some cats may be lions", "No cats are lions", "Some lions are cats"], a: 1 },
  { q: "Find the missing term: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], a: 0 },
  { q: "If A is taller than B, C shorter than D, D taller than A. Who is tallest?", options: ["A", "B", "C", "D"], a: 3 },
  { q: "Which doesn’t belong? Rose, Lily, Mango, Lotus", options: ["Rose", "Lily", "Mango", "Lotus"], a: 2 },
  { q: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?", options: ["3", "4", "5", "6"], a: 1 },
  // … Continue until 50 reasoning questions (blood relations, coding-decoding, series, seating puzzles, syllogisms)

  // ---------------------------
  // Puzzles / Probability / DI (50)
  // ---------------------------
  { q: "If population grows 5% annually, what is growth factor after 3 years?", options: ["1.15", "1.1576", "1.20", "1.30"], a: 1 },
  { q: "If 2 dice are rolled, probability of sum 8?", options: ["5/36", "6/36", "4/36", "7/36"], a: 0 },
  { q: "In a box with 3 red, 2 blue, probability of drawing blue?", options: ["1/5", "2/5", "3/5", "4/5"], a: 1 },
  { q: "Four persons sit around table. How many seating arrangements?", options: ["4!", "3!", "2!", "2"], a: 1 },
  { q: "From 7 men, 5 women, choose 3 persons. Ways?", options: ["84", "120", "220", "330"], a: 2 },
  // … Continue until 50 probability/puzzle/DI questions


  // Mix: Quant (50), Logical Reasoning (50), Puzzles/DI/Probability/Series (50)
];

// ---------------------------
// Computer Fundamentals (150)
// ---------------------------
export const CF_POOL_150 = [
  // DSA
  { q: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Graph"], a: 1 },
  { q: "Time complexity of merge sort?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"], a: 2 },
  { q: "DFS traversal uses?", options: ["Queue", "Stack", "Array", "List"], a: 1 },
  { q: "Which is a self-balancing BST?", options: ["AVL Tree", "Heap", "Graph", "Trie"], a: 0 },
  { q: "Which is not a linear data structure?", options: ["Array", "Stack", "Queue", "Tree"], a: 3 },

  // OS
  { q: "Which scheduling algorithm is preemptive?", options: ["FCFS", "SJF", "Round Robin", "None"], a: 2 },
  { q: "Deadlock requires?", options: ["Mutual exclusion", "Hold & wait", "No preemption", "All of these"], a: 3 },
  { q: "Thrashing occurs when?", options: ["Page faults high", "CPU overload", "Memory free", "Cache full"], a: 0 },
  { q: "Paging divides memory into?", options: ["Frames", "Pages", "Blocks", "Both A & B"], a: 3 },
  { q: "Semaphore used for?", options: ["Deadlock", "Synchronization", "Paging", "Scheduling"], a: 1 },

  // DBMS
  { q: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], a: 2 },
  { q: "SQL command to remove a table?", options: ["DELETE", "DROP", "REMOVE", "CLEAR"], a: 1 },
  { q: "ACID in DBMS stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Durability", "Access, Control, Index, Data", "None"], a: 0 },
  { q: "Which key uniquely identifies rows?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"], a: 0 },
  { q: "JOIN returning unmatched rows?", options: ["INNER", "LEFT/RIGHT", "CROSS", "SELF"], a: 1 },

  // SQL
  { q: "Which is aggregate?", options: ["COUNT", "SELECT", "JOIN", "UPDATE"], a: 0 },
  { q: "HAVING clause filters?", options: ["Rows before grouping", "Rows after grouping", "Columns", "Indexes"], a: 1 },
  { q: "Which allows NULLs?", options: ["Primary Key", "Foreign Key", "Unique", "All"], a: 1 },
  { q: "Which clause sorts?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], a: 1 },
  { q: "Which index improves query speed?", options: ["Clustered", "Foreign", "Composite", "All"], a: 3 },

  // Cloud
  { q: "AWS EC2 is?", options: ["IaaS", "PaaS", "SaaS", "DBaaS"], a: 0 },
  { q: "Gmail is?", options: ["IaaS", "PaaS", "SaaS", "DBaaS"], a: 2 },
  { q: "Kubernetes is?", options: ["Orchestration", "Hypervisor", "Cloud provider", "Database"], a: 0 },
  { q: "Serverless example?", options: ["AWS Lambda", "Docker", "K8s", "VM"], a: 0 },
  { q: "Horizontal scaling means?", options: ["Add CPUs", "Add more servers", "Reduce storage", "All"], a: 1 },
  // 👉 Continue this pattern to reach 150 Qs
  // ---------------------------
  // Data Structures & Algorithms (40)
  // ---------------------------
  { q: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Graph"], a: 1 },
  { q: "Time complexity of merge sort?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"], a: 2 },
  { q: "DFS traversal uses?", options: ["Queue", "Stack", "Array", "Linked List"], a: 1 },
  { q: "Which is a self-balancing BST?", options: ["AVL Tree", "Heap", "Graph", "Trie"], a: 0 },
  { q: "Which is not a linear data structure?", options: ["Array", "Stack", "Queue", "Tree"], a: 3 },
  { q: "The best case time of QuickSort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], a: 1 },
  { q: "Heap sort worst case complexity?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], a: 1 },
  { q: "In adjacency matrix representation of a graph, space required is?", options: ["O(V)", "O(V^2)", "O(E)", "O(V+E)"], a: 1 },
  { q: "Hashing average search time?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], a: 0 },
  { q: "BFS of a graph uses?", options: ["Stack", "Queue", "Tree", "Heap"], a: 1 },
  { q: "A binary tree with n nodes has how many edges?", options: ["n", "n-1", "n+1", "2n"], a: 1 },
  { q: "Which traversal is used for expression trees?", options: ["Inorder", "Preorder", "Postorder", "Level order"], a: 2 },
  { q: "Minimum spanning tree algorithms?", options: ["Prim & Kruskal", "DFS & BFS", "Dijkstra & Bellman-Ford", "Heap & Hash"], a: 0 },
  { q: "Dijkstra’s algorithm is used for?", options: ["Shortest path", "MST", "Sorting", "Hashing"], a: 0 },
  { q: "What is Big-O of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], a: 1 },
  { q: "Stack overflow occurs when?", options: ["Heap is full", "Stack is full", "Queue is full", "Disk full"], a: 1 },
  { q: "Circular queue avoids?", options: ["Overflow", "Underflow", "Wastage of space", "Recursion"], a: 2 },
  { q: "Which sorting algorithm is stable?", options: ["Quick", "Merge", "Heap", "Selection"], a: 1 },
  { q: "Which tree is strictly balanced?", options: ["AVL", "Heap", "BST", "Red-Black"], a: 3 },
  { q: "Knapsack problem solved by?", options: ["Greedy", "Dynamic programming", "Backtracking", "All"], a: 3 },
  // … add 20 more similar tricky DSA questions

  // ---------------------------
  // Operating Systems (30)
  // ---------------------------
  { q: "Which scheduling algorithm is preemptive?", options: ["FCFS", "SJF", "Round Robin", "None"], a: 2 },
  { q: "Deadlock requires?", options: ["Mutual exclusion", "Hold & wait", "No preemption", "All"], a: 3 },
  { q: "Thrashing occurs when?", options: ["Page faults high", "CPU overload", "Memory free", "Cache full"], a: 0 },
  { q: "Paging divides memory into?", options: ["Frames", "Pages", "Blocks", "Both A & B"], a: 3 },
  { q: "Semaphore used for?", options: ["Deadlock", "Synchronization", "Paging", "Scheduling"], a: 1 },
  { q: "Context switching is?", options: ["Process to thread", "Thread to process", "Saving CPU state", "Memory swap"], a: 2 },
  { q: "LRU stands for?", options: ["Least Recently Used", "Last Recently Used", "Least Regular Use", "Low Recent Use"], a: 0 },
  { q: "Which is non-preemptive scheduling?", options: ["Round Robin", "FCFS", "SJF preemptive", "Priority"], a: 1 },
  { q: "Which OS is real-time?", options: ["Linux", "Windows", "RTOS", "Unix"], a: 2 },
  { q: "Banker’s algorithm prevents?", options: ["Deadlock", "Starvation", "Paging", "Segmentation"], a: 0 },
  { q: "Page fault occurs when?", options: ["Page in memory", "Page not in memory", "Page replaced", "Disk full"], a: 1 },
  { q: "Virtual memory is implemented using?", options: ["Cache", "Disk", "Registers", "ROM"], a: 1 },
  { q: "Which scheduling is starvation-free?", options: ["Round Robin", "Priority", "SJF", "FCFS"], a: 0 },
  { q: "Optimal page replacement uses?", options: ["Future knowledge", "Past knowledge", "Random", "FIFO"], a: 0 },
  { q: "Critical section in OS means?", options: ["Shared resource code", "Private code", "Dead code", "Infinite loop"], a: 0 },
  // … add 15 more OS questions

  // ---------------------------
  // DBMS (30)
  // ---------------------------
  { q: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], a: 2 },
  { q: "SQL command to remove a table?", options: ["DELETE", "DROP", "REMOVE", "CLEAR"], a: 1 },
  { q: "ACID in DBMS stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Durability", "Access, Control, Index, Data", "None"], a: 0 },
  { q: "Which key uniquely identifies rows?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"], a: 0 },
  { q: "JOIN returning unmatched rows?", options: ["INNER", "LEFT/RIGHT", "CROSS", "SELF"], a: 1 },
  { q: "Which index improves query speed?", options: ["Clustered", "Non-clustered", "Both", "None"], a: 2 },
  { q: "Which SQL is used to change schema?", options: ["DDL", "DML", "TCL", "DCL"], a: 0 },
  { q: "Denormalization means?", options: ["Add redundancy", "Remove redundancy", "Normalize DB", "Delete DB"], a: 0 },
  { q: "View in SQL is?", options: ["Virtual table", "Real table", "Index", "Schema"], a: 0 },
  { q: "Which join is Cartesian product?", options: ["INNER", "LEFT", "CROSS", "SELF"], a: 2 },
  // … add 20 more DBMS questions

  // ---------------------------
  // SQL (30)
  // ---------------------------
  { q: "Which is aggregate?", options: ["COUNT", "SELECT", "JOIN", "UPDATE"], a: 0 },
  { q: "HAVING clause filters?", options: ["Rows before grouping", "Rows after grouping", "Columns", "Indexes"], a: 1 },
  { q: "Which allows NULLs?", options: ["Primary Key", "Foreign Key", "Unique", "All"], a: 1 },
  { q: "Which clause sorts?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], a: 1 },
  { q: "Which statement adds new row?", options: ["INSERT", "UPDATE", "DELETE", "SELECT"], a: 0 },
  { q: "Which keyword is used to eliminate duplicates?", options: ["ALL", "DISTINCT", "UNIQUE", "LIMIT"], a: 1 },
  { q: "Which query finds max salary?", options: ["SELECT MAX(salary) FROM emp", "SELECT MIN(salary)", "SELECT salary>MAX", "SELECT COUNT(salary)"], a: 0 },
  { q: "Which function counts rows?", options: ["SUM", "AVG", "COUNT", "MAX"], a: 2 },
  { q: "What is subquery?", options: ["Query inside query", "Update query", "Delete query", "None"], a: 0 },
  { q: "Which constraint ensures uniqueness?", options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"], a: 0 },
  // … add 20 more SQL questions

  // ---------------------------
  // Cloud Computing (20)
  // ---------------------------
  { q: "AWS EC2 is?", options: ["IaaS", "PaaS", "SaaS", "DBaaS"], a: 0 },
  { q: "Gmail is?", options: ["IaaS", "PaaS", "SaaS", "DBaaS"], a: 2 },
  { q: "Kubernetes is?", options: ["Orchestration", "Hypervisor", "Cloud provider", "Database"], a: 0 },
  { q: "Serverless example?", options: ["AWS Lambda", "Docker", "K8s", "VM"], a: 0 },
  { q: "Horizontal scaling means?", options: ["Add CPUs", "Add more servers", "Reduce storage", "All"], a: 1 },
  { q: "Cloud bursting means?", options: ["Use local only", "Use hybrid cloud during peak", "Always cloud", "Private cloud"], a: 1 },
  { q: "S3 is AWS service for?", options: ["Compute", "Storage", "Networking", "AI"], a: 1 },
  { q: "Azure Functions is?", options: ["VM", "Serverless", "Database", "Queue"], a: 1 },
  { q: "Which is a CDN?", options: ["CloudFront", "EC2", "RDS", "EKS"], a: 0 },
  { q: "Hybrid cloud means?", options: ["Private only", "Public only", "Mix public & private", "Community"], a: 2 },
  // … add 10 more Cloud questions






  // Mix: 40 DSA, 30 OS, 30 DBMS, 30 SQL, 20 Cloud
];
