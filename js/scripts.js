$(document).ready(function() {
  console.log("WTF");
  $("form#dog").submit(function(event) {
    console.log("is this working?");
    const name = $("input#name").val();
    const size = $("input#bag-size").val();
    const protein = $("input:radio[name=protein]:checked").val();
    const delivery = $("input#delivery").val();

    $(".name").text(name);
    $(".bag-size").text(size);
    $(".protein").text(protein);
    $(".delivery").text(delivery);

    //("#receipt").show();

    event.preventDefault();
  });
});