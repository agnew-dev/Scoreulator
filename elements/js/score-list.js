Polymer({
  is: 'score-list',
  getTime: function(startTime, abstractGameState, currentPeriodTimeRemaining, currentPeriodOrdinal){
    var momentDate = moment.utc(startTime);
    var localDate = moment(momentDate).local();
    return "test";
    if(abstractGameState === "Preview")
      return 'test';
      //return localDate.format("h:mm");

    if(abstractGameState === "Live")
      return currentPeriodOrdinal + " / "+ currentPeriodTimeRemaining;

    if(abstractGameState === "Final")
      return "Final";




  },
  getTimeZone: function(){
    return moment.tz.guess();
  },
  isGameTimeLive: function(gameStatus){
    if(gameStatus === "Live")
      return "liveGameTime";
    else if(gameStatus === "Final")
      return "finalGameTime";
    else{
      return "previewGameTime";
    }
  },
  isGameScoreLive: function(gameStatus){
    if(gameStatus === "Live")
      return "liveGameScore";
    else if(gameStatus === "Final")
      return "finalGameScore";
    else{
      return "previewGameScore";
    }
  },
  isGamePreview: function(gameStatus){
    if(gameStatus === "Preview"){
      return "show";
    }
    else{
      return "hide";
    }
  },
  isGameLive: function(gameStatus){
    if(gameStatus === "Live")
      return "show";
    else {
      return "hide";
    }
  },
  isGameFinal: function(gameStatus){
    if(gameStatus === "Final")
      return "show";
    else {
      return "hide";
    }
  },
  isSpanPreview: function(gameStatus){
    if(gameStatus === "Preview")
      return "2";
    else {
      return "0";
    }
  },
  isSpanLive: function(gameStatus){
    if(gameStatus === "Live")
      return "2";
    else {
      return "0";
    }
  },
  isSpanFinal: function(gameStatus){
    if(gameStatus === "Final")
      return "2";
    else {
      return "0";
    }
  },
  getTeamStyle: function(teamAbbrev){
    var abr = teamAbbrev;
    abr = abr.toLowerCase();
    return "Plain-"+abr+"-bg";
  }

});
