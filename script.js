
  // State flags
  // Switchers
  qs1_state = 'on';
  qs2_state = 'on';
  qs3_state = 'off';
  // Breakers
  qf1_state = 'on';
  qf2_state = 'on';
  qf3_state = 'on';
  qf4_state = 'on';
  qf5_state = 'on';
  qf6_state = 'on';
  qf7_state = 'on';
  qf8_state = 'on';
  qf9_state = 'on';
  qf10_state = 'on';
  qf11_state = 'on';
  qf12_state = 'on';
  // Meter Values
  // Bus #1
  // High side
  bus1_hv_sens_A = 'on';
  bus1_hv_sens_B = 'on';
  bus1_hv_sens_C = 'on';
  bus1_hv_volt_A = 10.1;
  bus1_hv_volt_B = 10.1;
  bus1_hv_volt_C = 10.1;
  bus1_hv_curr_A = 6;
  bus1_hv_curr_B = 5;
  bus1_hv_curr_C = 1;
  // Low side
  bus1_lv_sens_A = 'on';
  bus1_lv_sens_B = 'on';
  bus1_lv_sens_C = 'on';
  bus1_lv_volt_A = 396;
  bus1_lv_volt_B = 398;
  bus1_lv_volt_C = 400;
  bus1_lv_curr_A = 16;
  bus1_lv_curr_B = 15;
  bus1_lv_curr_C = 11;
  // Bus #2
  // High side
  bus2_hv_sens_A = 'on';
  bus2_hv_sens_B = 'on';
  bus2_hv_sens_C = 'on';
  bus2_hv_volt_A = 10.1;
  bus2_hv_volt_B = 10.1;
  bus2_hv_volt_C = 10.1;
  bus2_hv_curr_A = 6;
  bus2_hv_curr_B = 5;
  bus2_hv_curr_C = 1;
  // Low side
  bus2_lv_sens_A = 'on';
  bus2_lv_sens_B = 'on';
  bus2_lv_sens_C = 'on';
  bus2_lv_volt_A = 396;
  bus2_lv_volt_B = 398;
  bus2_lv_volt_C = 400;
  bus2_lv_curr_A = 16;
  bus2_lv_curr_B = 15;
  bus2_lv_curr_C = 11;


var holder = d3.select("body")
    .append("svg")
    .attr("width", 700)
    .attr("height", 600);

 // HV main bus
  holder.append("line")
    .attr("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", 100)
    .attr("y1", 40)
    .attr("x2", 600)
    .attr("y2", 40);
   holder.append("text")
    .style("fill", "black")
    .attr("x", 55)
    .attr("y", 45)
    .attr("text-anchor", "middle")
    .text("Bus 10kV");

  // FV1
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 130)
    .attr("y1", 40)
    .attr("x2", 130)
    .attr("y2", 80);
  holder.append("rect")
    .style("stroke", "blue")
    .style("fill", "none")
    .attr("x", 120)
    .attr("y", 70)
    .attr("height", 40)
    .attr("width", 20);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 130)
    .attr("y1", 100)
    .attr("x2", 130)
    .attr("y2", 140);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 120)
    .attr("y1", 140)
    .attr("x2", 140)
    .attr("y2", 140);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 125)
    .attr("y1", 145)
    .attr("x2", 135)
    .attr("y2", 145);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 129)
    .attr("y1", 150)
    .attr("x2", 132)
    .attr("y2", 150);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 165)
    .attr("y", 95)
    .attr("text-anchor", "middle")
    .text("FV1");

  // Line 1
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 200)
    .attr("y1", 40)
    .attr("x2", 200)
    .attr("y2", 70);
   // QS1
   var qs1_pos;
   if(qs1_state == 'on') {qs1_pos = 200;} else {qs1_pos = 190;}
   holder.append("line")
    .attr("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", qs1_pos)
    .attr("y1", 70)
    .attr("x2", 200)
    .attr("y2", 90);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 235)
    .attr("y", 85)
    .attr("text-anchor", "middle")
    .text("QS1");
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 200)
    .attr("y1", 90)
    .attr("x2", 200)
    .attr("y2", 125);
  // QF1
  var qf1_color;
  if(qf1_state == 'on') {qf1_color = 'green';} else {qf1_color = 'red';}
  holder.append("rect")
    .style("fill", qf1_color)
    .style("stroke", "blue")
    .attr("x", 187.5)
    .attr("y", 125)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 235)
    .attr("y", 143)
    .attr("text-anchor", "middle")
    .text("QF1");
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 200)
    .attr("y1", 150)
    .attr("x2", 200)
    .attr("y2", 190);

  // T1
  holder.append("rect")
    .style("fill", "#ff9632")
    .attr("x", 225)
    .attr("y", 205)
    .attr("height", 20)
    .attr("width", 20);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 235)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .text("T1");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 150)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .text("630kVA");
  holder.append("circle")
    .style("fill", "none")
    .style("stroke", "blue")
    .attr("cx", 200)
    .attr("cy", 205)
    .attr("r", 15);
  holder.append("circle")
    .style("fill", "none")
    .style("stroke", "blue")
    .attr("cx", 200)
    .attr("cy", 220)
    .attr("r", 15);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 200)
    .attr("y1", 235)
    .attr("x2", 200)
    .attr("y2", 280);

  // QF2
  var qf2_color;
  if(qf2_state == 'on') {qf2_color = 'green';} else {qf2_color = 'red';}
  holder.append("rect")
   .style("fill", qf2_color)
   .style("stroke", "blue")
   .attr("x", 187.5)
   .attr("y", 280)
   .attr("height", 25)
   .attr("width", 25);
  holder.append("text")
   .style("fill", "black")
   .attr("x", 235)
   .attr("y", 297)
   .attr("text-anchor", "middle")
   .text("QF2");
  holder.append("line")
   .style("stroke", "blue")
   .attr("x1", 200)
   .attr("y1", 305)
   .attr("x2", 200)
   .attr("y2", 390);

  // Meter point #1
  var bus1_hv_sens_A_color, bus1_hv_sens_B_color, bus1_hv_sens_C_color;
  if(bus1_hv_sens_A == 'on') {bus1_hv_sens_A_color = 'green';} else {bus1_hv_sens_A_color = 'red';}
  if(bus1_hv_sens_B == 'on') {bus1_hv_sens_B_color = 'green';} else {bus1_hv_sens_B_color = 'red';}
  if(bus1_hv_sens_C == 'on') {bus1_hv_sens_C_color = 'green';} else {bus1_hv_sens_C_color = 'red';}
  holder.append("line")
    .style("stroke", "gray")
    .attr("x1", 190)
    .attr("y1", 170)
    .attr("x2", 250)
    .attr("y2", 170);
  holder.append("circle")
    .style("fill", bus1_hv_sens_A_color)
    .style("stroke", "blue")
    .attr("cx", 260)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus1_hv_sens_B_color)
    .style("stroke", "blue")
    .attr("cx", 250)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus1_hv_sens_C_color)
    .style("stroke", "blue")
    .attr("cx", 240)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 312)
    .attr("y", 155)
    .attr("text-anchor", "middle")
    .text("A " + bus1_hv_volt_A + "kV " + bus1_hv_curr_A + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 312)
    .attr("y", 175)
    .attr("text-anchor", "middle")
    .text("B " + bus1_hv_volt_B + "kV " + bus1_hv_curr_B + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 312)
    .attr("y", 195)
    .attr("text-anchor", "middle")
    .text("C " + bus1_hv_volt_C + "kV " + bus1_hv_curr_C + "A");

  // Meter point #2
  var bus1_lv_sens_A_color, bus1_lv_sens_B_color, bus1_lv_sens_C_color;
  if(bus1_lv_sens_A == 'on') {bus1_lv_sens_A_color = 'green';} else {bus1_lv_sens_A_color = 'red';}
  if(bus1_lv_sens_B == 'on') {bus1_lv_sens_B_color = 'green';} else {bus1_lv_sens_B_color = 'red';}
  if(bus1_lv_sens_C == 'on') {bus1_lv_sens_C_color = 'green';} else {bus1_lv_sens_C_color = 'red';}
  holder.append("line")
    .style("stroke", "gray")
    .attr("x1", 190)
    .attr("y1", 255)
    .attr("x2", 250)
    .attr("y2", 255);
  holder.append("circle")
    .style("fill", bus1_lv_sens_A_color)
    .style("stroke", "blue")
    .attr("cx", 260)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus1_lv_sens_B_color)
    .style("stroke", "blue")
    .attr("cx", 250)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus1_lv_sens_C_color)
    .style("stroke", "blue")
    .attr("cx", 240)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 310)
    .attr("y", 240)
    .attr("text-anchor", "middle")
    .text("A " + bus1_lv_volt_A + "V " + bus1_lv_curr_A + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 310)
    .attr("y", 260)
    .attr("text-anchor", "middle")
    .text("B " + bus1_lv_volt_B + "V " + bus1_lv_curr_B + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 310)
    .attr("y", 280)
    .attr("text-anchor", "middle")
    .text("C " + bus1_lv_volt_C + "V " + bus1_lv_curr_C + "A");

  // Line 2
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 500)
    .attr("y1", 40)
    .attr("x2", 500)
    .attr("y2", 70);

  // QS2
  holder.append("text")
    .style("fill", "black")
    .attr("x", 535)
    .attr("y", 85)
    .attr("text-anchor", "middle")
    .text("QS2");
   var qs2_pos;
   if(qs2_state == 'on') {qs2_pos = 500;} else {qs2_pos = 490;}
   holder.append("line")
    .style("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", qs2_pos)
    .attr("y1", 70)
    .attr("x2", 500)
    .attr("y2", 90);

  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 500)
    .attr("y1", 90)
    .attr("x2", 500)
    .attr("y2", 125);

  // QF3
  var qf3_color;
  if(qf3_state == 'on') {qf3_color = 'green';} else {qf3_color = 'red';}
  holder.append("rect")
    .style("fill", qf3_color)
    .style("stroke", "blue")
    .attr("x", 487.5)
    .attr("y", 125)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 535)
    .attr("y", 143)
    .attr("text-anchor", "middle")
    .text("QF3");

  // Meter point #3
  var bus2_hv_sens_A_color, bus2_hv_sens_B_color, bus2_hv_sens_C_color;
  if(bus2_hv_sens_A == 'on') {bus2_hv_sens_A_color = 'green';} else {bus2_hv_sens_A_color = 'red';}
  if(bus2_hv_sens_B == 'on') {bus2_hv_sens_B_color = 'green';} else {bus2_hv_sens_B_color = 'red';}
  if(bus2_hv_sens_C == 'on') {bus2_hv_sens_C_color = 'green';} else {bus2_hv_sens_C_color = 'red';}
  holder.append("line")
    .style("stroke", "gray")
    .attr("x1", 490)
    .attr("y1", 170)
    .attr("x2", 550)
    .attr("y2", 170);
  holder.append("circle")
    .style("fill", bus2_hv_sens_A_color)
    .style("stroke", "blue")
    .attr("cx", 560)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus2_hv_sens_B_color)
    .style("stroke", "blue")
    .attr("cx", 550)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus2_hv_sens_C_color)
    .style("stroke", "blue")
    .attr("cx", 540)
    .attr("cy", 170)
    .attr("r", 5);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 612)
    .attr("y", 155)
    .attr("text-anchor", "middle")
    .text("A " + bus2_hv_volt_A + "kV " + bus2_hv_curr_A + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 612)
    .attr("y", 175)
    .attr("text-anchor", "middle")
    .text("B " + bus2_hv_volt_B + "kV " + bus2_hv_curr_B + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 612)
    .attr("y", 195)
    .attr("text-anchor", "middle")
    .text("C " + bus2_hv_volt_C + "kV " + bus2_hv_curr_C + "A");

  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 500)
    .attr("y1", 150)
    .attr("x2", 500)
    .attr("y2", 190);

  // T2
  holder.append("rect")
    .style("fill", "#ff9632")
    .attr("x", 525)
    .attr("y", 205)
    .attr("height", 20)
    .attr("width", 20);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 535)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .text("T2");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 450)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .text("630kVA");
  holder.append("circle")
    .style("fill", "none")
    .style("stroke", "blue")
    .attr("cx", 500)
    .attr("cy", 205)
    .attr("r", 15);
  holder.append("circle")
    .style("fill", "none")
    .style("stroke", "blue")
    .attr("cx", 500)
    .attr("cy", 220)
    .attr("r", 15);

  // Meter point #4
  var bus2_lv_sens_A_color, bus2_lv_sens_B_color, bus2_lv_sens_C_color;
  if(bus2_lv_sens_A == 'on') {bus2_lv_sens_A_color = 'green';} else {bus2_lv_sens_A_color = 'red';}
  if(bus2_lv_sens_B == 'on') {bus2_lv_sens_B_color = 'green';} else {bus2_lv_sens_B_color = 'red';}
  if(bus2_lv_sens_C == 'on') {bus2_lv_sens_C_color = 'green';} else {bus2_lv_sens_C_color = 'red';}
  holder.append("line")
    .style("stroke", "gray")
    .attr("x1", 490)
    .attr("y1", 255)
    .attr("x2", 550)
    .attr("y2", 255);
  holder.append("circle")
    .style("fill", bus2_lv_sens_A_color)
    .style("stroke", "blue")
    .attr("cx", 560)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus2_lv_sens_B_color)
    .style("stroke", "blue")
    .attr("cx", 550)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("circle")
    .style("fill", bus2_lv_sens_C_color)
    .style("stroke", "blue")
    .attr("cx", 540)
    .attr("cy", 255)
    .attr("r", 5);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 610)
    .attr("y", 240)
    .attr("text-anchor", "middle")
    .text("A " + bus2_lv_volt_A + "V " + bus2_lv_curr_A + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 610)
    .attr("y", 260)
    .attr("text-anchor", "middle")
    .text("B " + bus2_lv_volt_B + "V " + bus2_lv_curr_B + "A");
  holder.append("text")
    .style("fill", "black")
    .attr("x", 610)
    .attr("y", 280)
    .attr("text-anchor", "middle")
    .text("C " + bus2_lv_volt_C + "V " + bus2_lv_curr_C + "A");

  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 500)
    .attr("y1", 235)
    .attr("x2", 500)
    .attr("y2", 280);

  // QF4
  var qf4_color;
  if(qf4_state == 'on') {qf4_color = 'green';} else {qf4_color = 'red';}
  holder.append("rect")
    .style("fill", qf4_color)
    .style("stroke", "blue")
    .attr("x", 487.5)
    .attr("y", 280)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
   .style("fill", "black")
   .attr("x", 535)
   .attr("y", 297)
   .attr("text-anchor", "middle")
   .text("QF4");

  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 500)
    .attr("y1", 305)
    .attr("x2", 500)
    .attr("y2", 390);

  // Secondary bus #1
   holder.append("line")
    .attr("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", 40)
    .attr("y1", 390)
    .attr("x2", 330)
    .attr("y2", 390);
  // 1.1
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 80)
    .attr("y1", 390)
    .attr("x2", 80)
    .attr("y2", 460);
  // QF5
  var qf5_color;
  if(qf5_state == 'on') {qf5_color = 'green';} else {qf5_color = 'red';}
  holder.append("rect")
    .style("fill", qf5_color)
    .style("stroke", "blue")
    .attr("x", 68)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 113)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF5");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 80)
    .attr("y1", 485)
    .attr("x2", 80)
    .attr("y2", 560);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 75)
    .attr("y1", 545)
    .attr("x2", 80)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 85)
    .attr("y1", 545)
    .attr("x2", 80)
    .attr("y2", 560);
  // 1.2
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 150)
    .attr("y1", 390)
    .attr("x2", 150)
    .attr("y2", 460);
  // QF6
  var qf6_color;
  if(qf6_state == 'on') {qf6_color = 'green';} else {qf6_color = 'red';}
  holder.append("rect")
    .style("fill", qf6_color)
    .style("stroke", "blue")
    .attr("x", 138)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 183)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF6");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 150)
    .attr("y1", 485)
    .attr("x2", 150)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 145)
    .attr("y1", 545)
    .attr("x2", 150)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 155)
    .attr("y1", 545)
    .attr("x2", 150)
    .attr("y2", 560);
  // 1.3
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 220)
    .attr("y1", 390)
    .attr("x2", 220)
    .attr("y2", 460);
  // QF7
  var qf7_color;
  if(qf7_state == 'on') {qf7_color = 'green';} else {qf7_color = 'red';}
  holder.append("rect")
    .style("fill", qf7_color)
    .style("stroke", "blue")
    .attr("x", 208)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 254)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF7");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 220)
    .attr("y1", 485)
    .attr("x2", 220)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 215)
    .attr("y1", 545)
    .attr("x2", 220)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 225)
    .attr("y1", 545)
    .attr("x2", 220)
    .attr("y2", 560);
  // 1.4
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 290)
    .attr("y1", 390)
    .attr("x2", 290)
    .attr("y2", 460);
  // QF8
  var qf8_color;
  if(qf8_state == 'on') {qf8_color = 'green';} else {qf8_color = 'red';}
  holder.append("rect")
    .style("fill", qf8_color)
    .style("stroke", "blue")
    .attr("x", 278)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 323)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF8");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 290)
    .attr("y1", 485)
    .attr("x2", 290)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 285)
    .attr("y1", 545)
    .attr("x2", 290)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 295)
    .attr("y1", 545)
    .attr("x2", 290)
    .attr("y2", 560);

  // Secondary bus #2
   holder.append("line")
    .attr("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", 380)
    .attr("y1", 390)
    .attr("x2", 670)
    .attr("y2", 390);
  // 2.1
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 420)
    .attr("y1", 390)
    .attr("x2", 420)
    .attr("y2", 460);
  // QF9
  var qf9_color;
  if(qf9_state == 'on') {qf9_color = 'green';} else {qf9_color = 'red';}
  holder.append("rect")
    .style("fill", qf9_color)
    .style("stroke", "blue")
    .attr("x", 408)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 451)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF9");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 420)
    .attr("y1", 485)
    .attr("x2", 420)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 415)
    .attr("y1", 545)
    .attr("x2", 420)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 425)
    .attr("y1", 545)
    .attr("x2", 420)
    .attr("y2", 560);
  // 2.2
    holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 490)
    .attr("y1", 390)
    .attr("x2", 490)
    .attr("y2", 460);
  // QF10
  var qf10_color;
  if(qf10_state == 'on') {qf10_color = 'green';} else {qf10_color = 'red';}
  holder.append("rect")
    .style("fill", qf10_color)
    .style("stroke", "blue")
    .attr("x", 478)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 525)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF10");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 490)
    .attr("y1", 485)
    .attr("x2", 490)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 485)
    .attr("y1", 545)
    .attr("x2", 490)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 495)
    .attr("y1", 545)
    .attr("x2", 490)
    .attr("y2", 560);
  // 2.3
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 560)
    .attr("y1", 390)
    .attr("x2", 560)
    .attr("y2", 460);
  // QF11
  var qf11_color;
  if(qf11_state == 'on') {qf11_color = 'green';} else {qf11_color = 'red';}
  holder.append("rect")
    .style("fill", qf11_color)
    .style("stroke", "blue")
    .attr("x", 548)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 595)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF11");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 560)
    .attr("y1", 485)
    .attr("x2", 560)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 555)
    .attr("y1", 545)
    .attr("x2", 560)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 565)
    .attr("y1", 545)
    .attr("x2", 560)
    .attr("y2", 560);
  // 2.4
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 630)
    .attr("y1", 390)
    .attr("x2", 630)
    .attr("y2", 460);
  // QF12
  var qf12_color;
  if(qf12_state == 'on') {qf12_color = 'green';} else {qf12_color = 'red';}
  holder.append("rect")
    .style("fill", qf12_color)
    .style("stroke", "blue")
    .attr("x", 618)
    .attr("y", 460)
    .attr("height", 25)
    .attr("width", 25);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 665)
    .attr("y", 478)
    .attr("text-anchor", "middle")
    .text("QF12");
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 630)
    .attr("y1", 485)
    .attr("x2", 630)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 625)
    .attr("y1", 545)
    .attr("x2", 630)
    .attr("y2", 560);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 635)
    .attr("y1", 545)
    .attr("x2", 630)
    .attr("y2", 560);

  // Bypass switcher (QS3)
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 310)
    .attr("y1", 390)
    .attr("x2", 310)
    .attr("y2", 360);
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 310)
    .attr("y1", 360)
    .attr("x2", 345)
    .attr("y2", 360);
  holder.append("text")
    .style("fill", "black")
    .attr("x", 355)
    .attr("y", 335)
    .attr("text-anchor", "middle")
    .text("QS3");
   var qs3_pos;
   if(qs3_state == 'on') {qs3_pos = 360;} else {qs3_pos = 345;}
   holder.append("line")
    .attr("stroke-width", 3)
    .style("stroke", "blue")
    .attr("x1", 345)
    .attr("y2", qs3_pos)
    .attr("y1", 360)
    .attr("x2", 365)
  holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 365)
    .attr("y1", 360)
    .attr("x2", 400)
    .attr("y2", 360);
   holder.append("line")
    .style("stroke", "blue")
    .attr("x1", 400)
    .attr("y1", 390)
    .attr("x2", 400)
    .attr("y2", 360);
