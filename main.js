const { Plugin, Notice } = require("obsidian");

module.exports = class CopyNoteNamePlugin extends Plugin {
  async onload() {
    // Добавляем иконку на боковую панель
    this.addRibbonIcon("copy", "Скопировать имя заметки", () => {
      // Получаем активную заметку
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        const noteName = activeFile.basename;
        // Копируем имя заметки в буфер обмена
        navigator.clipboard
          .writeText(noteName)
          .then(() => {
            new Notice("Имя заметки скопировано в буфер обмена", 500);
          })
          .catch((err) => {
            new Notice("Ошибка при копировании: " + err);
          });
      } else {
        new Notice("Нет активной заметки");
      }
    });
  }

  onunload() {
    // Очистка при отключении плагина (если необходимо)
  }
};
