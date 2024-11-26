package com.aoc.aoc.solutions_2023;

import java.text.DecimalFormat;
import java.time.Duration;
import java.time.Instant;

public class S_05 extends Solution {

  public S_05(String input) {
    super(input);
  }

  public String task_1() {
    Instant starts = Instant.now();
    String[] sections = input.split("\\n\\n");
    sections[0] = sections[0].split(": ")[1];
    for (int i = 1; i < sections.length; i++) {
      sections[i] = sections[i].split(":\\n")[1];
    }

    String[] seeds = sections[0].split(" ");

    Mapping[] maps = new Mapping[7];
    for (int i = 0; i < maps.length; i++) {
      maps[i] = new Mapping(sections[i + 1]);
    }

    double min = Double.MAX_VALUE;

    for (String seed : seeds) {
      double currentPosition = Double.parseDouble(seed);
      for (Mapping mapping : maps) {
        currentPosition = mapping.newPos(currentPosition);
      }
      if (min > currentPosition) {
        min = currentPosition;
      }
    }

    Instant ends = Instant.now();
    System.out.println("Execution time: " + Duration.between(starts, ends));

    DecimalFormat df = new DecimalFormat("#.##");
    return String.valueOf(df.format(min));
  }

  public String task_2() {
    Instant starts = Instant.now();
    String[] sections = input.split("\\n\\n");
    sections[0] = sections[0].split(": ")[1];
    for (int i = 1; i < sections.length; i++) {
      sections[i] = sections[i].split(":\\n")[1];
    }

    String[] seeds = sections[0].split(" ");

    Mapping[] maps = new Mapping[7];
    for (int i = 0; i < maps.length; i++) {
      maps[i] = new Mapping(sections[i + 1]);
    }

    double min = Double.MAX_VALUE;

    for (double i = Double.parseDouble(seeds[0]); i < Double.parseDouble(seeds[0])
        + Double.parseDouble(seeds[1]); i++) {
      System.out.println("Current seed: " + i);
      double currentPosition = i;
      for (Mapping mapping : maps) {
        currentPosition = mapping.newPos(currentPosition);
      }
      if (min > currentPosition) {
        min = currentPosition;
      }
    }

    // for (String seed : seeds) {
    // double currentPosition = Double.parseDouble(seed);
    // for (Mapping mapping : maps) {
    // currentPosition = mapping.newPos(currentPosition);
    // }
    // if (min > currentPosition) {
    // min = currentPosition;
    // }
    // }

    Instant ends = Instant.now();
    System.out.println("Execution time: " + Duration.between(starts, ends));

    DecimalFormat df = new DecimalFormat("#.##");
    return String.valueOf(df.format(min));
  }

  private class Mapping {

    Range[] r;

    public Mapping(String values) {
      String[] lines = values.split("\\n");
      r = new Range[lines.length];
      int index = 0;
      for (String line : lines) {
        String[] val = line.split(" ");
        r[index] = new Range(Double.parseDouble(val[0]), Double.parseDouble(val[1]), Double.parseDouble(val[2]));
        index++;
      }
    }

    public double newPos(double n) {
      double temp = -1;
      for (Range range : r) {
        temp = range.within(n);
        if (temp != -1) {
          return temp;
        }
      }
      return n;
    }
  }

  private class Range {

    private double outStart, inStart, inEnd;

    public Range(double outStart, double inStart, double m) {
      this.outStart = outStart;
      this.inStart = inStart;
      this.inEnd = inStart + m;
    }

    public double within(double n) {
      if (inStart <= n && n < inEnd) {
        return n - (inStart - outStart);
      } else {
        return -1;
      }
    }
  }
}
