package com.aoc.solutions_2023;

import com.aoc.lib.*;

public class S_09 extends Solution {

  private InputHandler input;

  public S_09(String input) {
    super(input);
    this.input = new InputHandler(input);

  }

  public String task_1() {
    String[] lines = input.getLines();
    for (String firstLine : lines) {
      String lineNumbers[] = firstLine.split(" ");
      Long numbers[] = new Long[lineNumbers.length + 1];
      Long nextMap[][] = new Long[lineNumbers.length][];
      for (int i = 0; i < lineNumbers.length; i++) {
        numbers[i] = Long.valueOf(lineNumbers[i]);
      }
      for (int i = 0; i < lineNumbers.length - 1; i++) {
        for (int j = 0; j < lines.length; j++) {

        }
      }
    }

    return "";
  }

  public String task_2() {

    return "";
  }

}
