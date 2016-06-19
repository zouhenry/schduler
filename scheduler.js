/**
 * Created by hzou on 6/19/16.
 */
angular
  .module('scheduler', [])
  .controller('Scheduler', function() {
    var self = this;
    self.techs = ["Elaine", "Felicia", "T", "B", "A", "D"];
    self.doctors = ["Smith", "Jones", "Chan"];
    self.schedules = [];
    self.addSchedule = function() {
      self.schedules.push(self.newSchedule);
      self.newSchedule = {};
    };
    self.generateSchedule = generateSchedule;

    function generateSchedule() {
      var newSchedule = {};
      self.doctors.forEach(function(doc) {
        self.techs.forEach(function(tech) {
          var previousTechsForDoc = _.map(self.techs, {
            [doc]: tech
          });
          console.log(previousTechsForDoc);
        });
      });

    }
    generateSchedule();
  });