AFRAME.registerComponent("markerhandler", {
  init: async function () {

    this.el.addEventListener("markerFound", () => {
      console.log("Pizza Marker Found")
      this.handleMarkerFound();
    });

    this.el.addEventListener("marker-lost", () => {
      console.log("Pizza Marker Lost")
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function () {
   
    var el = document.getElementById("button-div");
    el.style.display = "flex";

    var rtgBtn = document.getElementById("rtg-btn");
    var ordBtn = document.getElementById("ord-btn");

    
    rtgBtn.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Rate Dish",
        text: "Work In Progress"
      });
    });

    ordBtn.addEventListener("click", () => {
      swal({
        icon: "success",
        title: "Thanks for your Order!",
        text: "The order will be served soon at your desk."
      });
    });
  },

  handleMarkerLost: function () {

    var el = document.getElementById("button-div");
    el.style.display = "none";
  }
});
