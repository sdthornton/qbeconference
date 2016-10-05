window.QBE || (window.QBE = {});
QBE.SortPapers = class SortPapers {
  constructor() {
    this.$table = $(document.getElementById('papers_table'));
    this.$rows = this.$table.find('tr');
    this.$authorSortedAsc = null;
    this.$authorSortedDesc = null;
    this.$dateSortedAsc = null;
    this.$dateSortedDesc = null;
    this.authorSort = document.querySelector('[data-sort-by="author"]');
    this.dateSort = document.querySelector('[data-sort-by="date"]');

    this.authorSort
      .addEventListener('click', e => this.onSortByAuthorClick(e), false);

    this.dateSort.addEventListener('click', e => this.onSortByDateClick(e), false);
  }

  onSortByAuthorClick(e) {
    this.dateSort.classList.remove('c-button--primary');
    this.authorSort.classList.add('c-button--primary');

    let type = this.authorSort.dataset.sortOrder;
    this.sortByAuthor(type);

    if (type === 'ascend') {
      this.authorSort.dataset.sortOrder = 'descend';
    } else {
      this.authorSort.dataset.sortOrder = 'ascend';
    }
  }

  onSortByDateClick(e) {
    this.authorSort.classList.remove('c-button--primary');
    this.dateSort.classList.add('c-button--primary');

    let type = this.dateSort.dataset.sortOrder;
    this.sortByDate(type);

    if (type === 'ascend') {
      this.dateSort.dataset.sortOrder = 'descend';
    } else {
      this.dateSort.dataset.sortOrder = 'ascend';
    }
  }

  sortByAuthor(direction = 'ascend') {
    if (direction === 'ascend') {
      if (!this.$authorSortedAsc) {
        this.$authorSortedAsc = this.$rows.clone().sort((a,b) => {
          if (a.dataset.name === b.dataset.name) {
            return +b.dataset.date - +a.dataset.date;
          }

          return a.dataset.name.toLowerCase() > b.dataset.name.toLowerCase() ? 1 : -1;
        });
      }

      return this.$table.html(this.$authorSortedAsc);

    } else {
      if (!this.$authorSortedDesc) {
        this.$authorSortedDesc = this.$rows.clone().sort((a,b) => {
          if (a.dataset.name === b.dataset.name) {
            return +b.dataset.date - +a.dataset.date;
          }

          return b.dataset.name.toLowerCase() > a.dataset.name.toLowerCase() ? 1 : -1;
        });
      }

      return this.$table.html(this.$authorSortedDesc);
    }
  }

  sortByDate(direction = 'descend') {
    if (direction === 'descend') {
      if (!this.$dateSortedDesc) {
        this.$dateSortedDesc = this.$rows.clone().sort((a,b) => {
          if (+a.dataset.date === +b.dataset.date) {
            return a.dataset.name.toLowerCase() > b.dataset.name.toLowerCase() ? 1 : -1;
          }

          return +b.dataset.date - +a.dataset.date;
        });
      }

      return this.$table.html(this.$dateSortedDesc);

    } else {
      if (!this.$dateSortedAsc) {
        this.$dateSortedAsc = this.$rows.clone().sort((a,b) => {
          if (+a.dataset.date === +b.dataset.date) {
            return a.dataset.name.toLowerCase() > b.dataset.name.toLowerCase() ? 1 : -1;
          }

          return +a.dataset.date - +b.dataset.date;
        });
      }

      return this.$table.html(this.$dateSortedAsc);
    }
  }
}
