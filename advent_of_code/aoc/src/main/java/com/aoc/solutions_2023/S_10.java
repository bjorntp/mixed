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
    PointMover pt = new PointMover(sp.getsX(), sp.getsY(), sp.getDirection(), m);
    pt.nextPoint();
    while (m[pt.getPosY()][pt.getPosX()] != 'S') {
      pt.nextPoint();
    }
    printMatrix(pt.getNewMap());
    return "";
  }

  private void printMatrix(Character[][] m) {
    for (int i = 0; i < m.length; i++) {
      for (int j = 0; j < m[0].length; j++) {
        System.out.print(m[i][j]);
      }
      System.out.println("");
    }
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

    public String getDirection() {
      return direction;
    }

    public int getsX() {
      return sX;
    }

    public int getsY() {
      return sY;
    }
  }

  /**
   * PointMover
   */
  public class PointMover {

    int posX, posY;
    String direction;
    Character[][] originalMap, newMap;

    public PointMover(int posX, int posY, String direction, Character[][] originalMap) {
      this.posX = posX;
      this.posY = posY;
      this.direction = direction;
      this.originalMap = originalMap;
      newMap = new Character[originalMap.length][originalMap[0].length];
      for (int i = 0; i < newMap.length; i++) {
        for (int j = 0; j < newMap[i].length; j++) {
          newMap[i][j] = '.';
          System.out.print(newMap[i][j]);
        }
        System.out.println("");
      }
    }

    public void nextPoint() {
      newMap[posY][posX] = '+';
      switch (direction) {
        case "LEFT":
          posX--;
          switch (originalMap[posY][posX]) {
            case 'L':
              direction = "UP";
              break;
            case 'F':
              direction = "DOWN";
              break;
            default:
              break;
          }
          break;
        case "RIGHT":
          posX++;
          switch (originalMap[posY][posX]) {
            case 'J':
              direction = "UP";
              break;
            case '7':
              direction = "DOWN";
              break;
            default:
              break;
          }
          break;
        case "UP":
          posY--;
          switch (originalMap[posY][posX]) {
            case '7':
              direction = "LEFT";
              break;
            case 'F':
              direction = "RIGHT";
              break;
            default:
              break;
          }
          break;
        case "DOWN":
          posY++;
          switch (originalMap[posY][posX]) {
            case 'L':
              direction = "RIGHT";
              break;
            case 'J':
              direction = "LEFT";
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }

    public Character[][] getNewMap() {
      return newMap;
    }

    public int getPosX() {
      return posX;
    }

    public int getPosY() {
      return posY;
    }
  }

  @Override
  public String task_2() {
    return "";
  }

}
