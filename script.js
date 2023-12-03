$(document).ready(function () {
  // DataTable
  $("#mainTable").DataTable({
    order: [[1, "desc"]],

    scrollY: "98vh",
    scrollCollapse: true,

    lengthMenu: [
      [15, 50, 100, -1],
      [15, 50, 100, "All"],
    ],

    searchBuilder: true,

    responsive: true,

    deferRender: true,
    ajax: {
      url: "https://raw.githubusercontent.com/ibrahimmudassar/RUFratStats/main/percentile.csv",
      dataType: "text",
      dataSrc: function (csvdata) {
        return $.csv.toObjects(csvdata);
      },
    },
  });
});
