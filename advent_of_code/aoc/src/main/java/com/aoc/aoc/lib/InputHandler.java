package com.aoc.aoc.lib;

/**
 * InputHandler
 */
public class InputHandler {

  private String rawInput;

  public InputHandler(String rawInput) {
    this.rawInput = rawInput;
  }

  /**
   * @return Array of each line stripped of trailing spaces
   */
  public String[] getLines() {
    String[] returnString = rawInput.split("\n");
    for (int i = 0; i < returnString.length; i++) {
      returnString[i] = returnString[i].strip();
    }
    return rawInput.split("\n");
  }

  /**
   * @return A string of the original input
   */
  public String raw() {
    return rawInput;
  }
}
