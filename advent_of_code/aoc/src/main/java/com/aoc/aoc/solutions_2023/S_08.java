package com.aoc.aoc.solutions_2023;

import java.util.HashMap;

import com.aoc.aoc.lib.InputHandler;
import com.aoc.aoc.lib.Tuple;
import com.aoc.aoc.lib.ExecutionTimer;

/**
 * S_08
 */
public class S_08 extends Solution {

  private InputHandler inputHandler;

  public S_08(String input) {
    super(input);
    inputHandler = new InputHandler(input);
  }

  public String task_1() {
    ExecutionTimer timer = new ExecutionTimer();
    timer.start();
    String[] lines = inputHandler.getLines();
    String sequence = lines[0];
    HashMap<String, Tuple<String, String>> mappings = new HashMap<>();
    for (int i = 2; i < lines.length; i++) {
      String startNode = lines[i].split(" = ")[0];
      Tuple<String, String> endNodes = new Tuple<>("", "");
      String[] end = lines[i].split(" = ")[1].replaceAll("[(),]", "").split(" ");
      endNodes.setX(end[0]);
      endNodes.setY(end[1]);
      mappings.put(startNode, endNodes);
    }
    String currentNode = "AAA";
    for (int i = 0; true; i++) {
      Character directionChar = sequence.charAt(i % sequence.length());
      if (directionChar == 'L') {
        currentNode = mappings.get(currentNode).getX();
      } else {
        currentNode = mappings.get(currentNode).getY();
      }

      if (currentNode.equals("ZZZ")) {
        timer.stop();
        System.out.println(timer.toString() + " ms");
        return Integer.toString(i + 1);
      }
    }
  }

  public String task_2() {
    return "";
  }

}
