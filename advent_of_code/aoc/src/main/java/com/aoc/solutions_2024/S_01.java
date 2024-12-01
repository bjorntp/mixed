package com.aoc.solutions_2024;

import java.util.ArrayList;
import java.util.Collections;

import com.aoc.lib.*;

public class S_01 extends Solution {

  public S_01(String input) {
    super(input);
  }

  @Override
  public String task_1() {
    ArrayList<Long> l1 = new ArrayList<>();
    ArrayList<Long> l2 = new ArrayList<>();
    InputHandler ih = new InputHandler(input);
    String[] lines = ih.getLines();
    for (String line : lines) {
      String[] l = line.split(" +");
      l1.add(Long.parseLong(l[0]));
      l2.add(Long.parseLong(l[1]));
    }
    Collections.sort(l1);
    Collections.sort(l2);
    Long total = 0l;
    for (int i = 0; i < l1.size(); i++) {
      total += Math.abs(l1.get(i) - l2.get(i));
    }
    return "" + total;

  }

  @Override
  public String task_2() {
    ArrayList<Long> l1 = new ArrayList<>();
    ArrayList<Long> l2 = new ArrayList<>();
    InputHandler ih = new InputHandler(input);
    String[] lines = ih.getLines();
    for (String line : lines) {
      String[] l = line.split(" +");
      l1.add(Long.parseLong(l[0]));
      l2.add(Long.parseLong(l[1]));
    }
    Collections.sort(l1);
    Collections.sort(l2);
    Long totalScore = 0l;
    int i = 0;
    for (int j = 0; j < lines.length; j++) {
      long cc = 0l;
      System.out.println(l1.get(j));
      while (i < l2.size()) {
        if (l1.get(j).equals(l2.get(i))) {
          cc++;
        }
        if (l1.get(j) < l2.get(i)) {
          i -= (int) cc;
          break;
        }
        i++;
      }
      totalScore += cc * l1.get(j);
    }
    return "" + totalScore;
  }
}
