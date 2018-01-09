  function comparelist(a, b) {
      if (a.text > b.text) return 1;
      if (a.text < b.text) return -1;
  }

  function comparelistd(a, b) {
      if (a.text > b.text) return -1;
      if (a.text < b.text) return 1;
  }


  export let sortListup = function(list) {
      let sort_List = list.sort(comparelist);
      return sort_List;
  }


  export let sortListdown = function(list) {
      let sort_List = list.sort(comparelistd);
      return sort_List;
  }