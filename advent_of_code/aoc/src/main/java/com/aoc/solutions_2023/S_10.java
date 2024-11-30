package com.aoc.solutions_2023;

import com.aoc.lib.*;

public class S_10 extends Solution {

  public S_10(String input) {
    super(input);
  }

  @Override
  public String task_1() {
    InputHandler ip = new InputHandler(input);
    Character[][] m = ip.getMatrix();
    StartingPoint sp = new StartingPoint(m);
    return "";
  }

  /**
   * StartingPoint
   */
  public class StartingPoint {

    private int sX, sY;
    private Character[][] matrix;
    private String direction;

    private StartingPoint(Character[][] matrix) {
      this.matrix = matrix;
      FindStart();
      System.out.println();
      System.out.println("Starting position: X: " + sX + " Y: " + sY + " Direction: " + direction);
    }

    private void FindStart() {
      for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] == 'S') {
            sX = j;
            sY = i;
          }
        }
      }
      if (sX != 0 && matrix[sX - 1][sY] != '.') {
        if (matrix[sX - 1][sY] == '-' || matrix[sX - 1][sY] == 'F' || matrix[sX - 1][sY] == 'L') {
          direction = "LEFT";
          return;
        }
      } else if (matrix[sX + 1][sY] != '.') {
        if (matrix[sX + 1][sY] == '-' || matrix[sX + 1][sY] == 'J' || matrix[sX + 1][sY] == '7') {
          direction = "RIGHT";
          return;
        }

      } else if (sY != 0 && matrix[sX][sY - 1] != '.') {
        if (matrix[sX][sY - 1] == '|' || matrix[sX][sY - 1] == 'F' || matrix[sX][sY - 1] == '7') {
          direction = "UP";
          return;
        }
      }
      direction = "DOWN";
    }
  }

  @Override
  public String task_2() {
    return "";
  }

}
