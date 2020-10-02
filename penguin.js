var penguinPromise=d3.json("classData.json");

var allpenguin= function(penguin) {
var finalgrade= penguin.final.grade

var finals=penguin.map(finalgrade)

var quizgrade=penguin.quizes.grade
var quizess=penguin.map(quizgrade)
return finals
return quizess}
var successFCN=function(penguin)
{console.log("Data Collection", penguin)
 intialgraph(penguin)
 click(penguin)
 

}



var failFCN=function(errormessage)
{console.log("something went wrong", errormessage)}

penguinPromise.then(successFCN, failFCN)

var drawPlot=function(penguin,screen,xScale,yscale )
{   
    var finalgrade= function(penguin){
  return penguin.final[0].grade
}
var finals=penguin.map(finalgrade)

var hwgrade=function(penguin)
{ 
    var getgrade=function(homework){
        return homework.grade
    }
    var grades=penguin.homework.map(getgrade)
    return d3.mean(grades)
}
var hwgrades=penguin.map(hwgrade)
console.log("finals", finals)
 console.log("hwgrades", hwgrades)
  d3.select("#graph")
  .selectAll("circle")
  .data(penguin)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(penguin)
  { 
      return xScale(finalgrade(penguin))})
  .attr("cy", function(penguin)
  {return yscale(hwgrade(penguin))})
   .attr("r",5)
    .attr("fill", "blue")
      .on("mouseenter",function(penguin)
{     var xPos=d3.event.pageX;
      var yPos=d3.event.pageY;
      d3.select("#tooltip")
      .classed("hidden", false)
      .style("top", xPos+"px")
      .style("left", yPos+"px")
        d3.select("img")
        .attr("src","imgs/"+ penguin.picture)
    
})
}


var intialgraph=function(penguin)
{ var screen= {width:600, height:600}
d3.select("#graph")
.attr("width", screen.width)
.attr("height", screen.height)

var xScale=d3.scaleLinear()
.domain([0,100])
.range([0,screen.width])

var yscale=d3.scaleLinear()
.domain([0,100])
.range([screen.height,0])

drawPlot(penguin,screen,xScale,yscale)
}


var drawPlot2=function(penguin,screen,xScale,yscale )
{ 
    var finalgrade= function(penguin){
  return penguin.final[0].grade
}
var finals=penguin.map(finalgrade)

var hwgrade=function(penguin)
{ 
    var getgrade=function(homework){
        return homework.grade
    }
    var grades=penguin.homework.map(getgrade)
    return d3.mean(grades)
}
var hwgrades=penguin.map(hwgrade)
console.log("finals", finals)
 console.log("hwgrades", hwgrades)
  d3.select("#graph")
  .selectAll("circle")
  .data(penguin)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(penguin)
  { 
      return xScale(hwgrade(penguin))})
  .attr("cy", function(penguin)
  {return yscale(finalgrade (penguin))})
   .attr("r",5)
    .attr("fill", "blue")
      .on("mouseenter",function(penguin)
{     var xPos=d3.event.pageX;
      var yPos=d3.event.pageY;
      d3.select("#tooltip")
      .classed("hidden", false)
      .style("top", xPos+"px")
      .style("left", yPos+"px")
        d3.select("img")
        .attr("src","imgs/"+ penguin.picture)

})
   
}

var click=function(penguin){
d3.select("#FHW")
    .on("click", drawPlot2)
d3.select("#HWF")
    .on("click", drawPlot)}