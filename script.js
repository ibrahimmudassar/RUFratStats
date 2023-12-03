$(document).ready(function () {
  // DataTable
  $("#percentile").DataTable({
    order: [[0, "asc"]],

    scrollY: "98vh",
    scrollCollapse: true,

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
    columns: [
      { data: "Rank" },
      { data: "Chapter" },
      { data: "Chapter Type" },
      { data: "Total Chapter GPA" },
      { data: "Average Hours Per Member" },
      { data: "Annual Report Score" },
      { data: "Charitable Donations Per Member" },
      { data: "Total" },
    ],
  });

  $("#chapters_raw").DataTable({
    order: [[0, "asc"]],

    scrollY: "98vh",
    scrollCollapse: true,

    searchBuilder: true,

    responsive: true,

    deferRender: true,
    ajax: {
      url: "https://raw.githubusercontent.com/ibrahimmudassar/RUFratStats/main/S23raw.csv",
      dataType: "text",
      dataSrc: function (csvdata) {
        return $.csv.toObjects(csvdata);
      },
    },
    columns: [
      { data: "Chapter" },
      { data: "Total Chapter Size" },
      { data: "New Member Class Size" },
      { data: "Total Chapter GPA" },
      { data: "New Member GPA" },
      { data: "Total Service Hours" },
      { data: "Average Hours Per Member" },
      { data: "Charitable Donations" },
      { data: "Charitable Donations Per Member" },
      { data: "Annual Report Score" },
      { data: "Star Ranking" },
      { data: "Chapter Type" },
      { data: "Semester" },
    ],
  });
});
