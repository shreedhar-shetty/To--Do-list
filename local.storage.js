class TodoApp {
  constructor() {
    this.tasks = [];
    this.isDark = false;
    this.loadData();
  }

  loadData() {
    // Get saved tasks + theme from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
    const savedTheme = localStorage.getItem("todoTheme") === "dark";

    this.tasks = savedTasks;
    this.isDark = savedTheme;

    document.body.className = this.isDark ? "dark" : "light";
    this.updateThemeIcon();
  }

  saveData() {
    // Save tasks + theme in localStorage
    localStorage.setItem("todoTasks", JSON.stringify(this.tasks));
    localStorage.setItem("todoTheme", this.isDark ? "dark" : "light");
  }

  addTask(task) {
    this.tasks.push({ name: task, completed: false });
    this.saveData();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.saveData();
  }

  updateThemeIcon() {
    console.log("Theme updated:", this.isDark ? "Dark" : "Light");
  }
}
