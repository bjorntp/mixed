package com.aoc.aoc;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aoc.aoc.solutions.S_01;
import com.aoc.aoc.solutions.S_02;
import com.aoc.aoc.solutions.Solution;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SolutionController {

  public SolutionController() {
  }

  @PostMapping("/solutions/01")
  public List<String> solution_01(@RequestBody String input) {
    Solution s_01 = new S_01(input);
    return Arrays.asList(s_01.task_1(), s_01.task_2());
  }

  @PostMapping("/solutions/02")
  public List<String> solution_02(@RequestBody String input) {
    Solution s_02 = new S_02(input);
    return Arrays.asList(s_02.task_1(), s_02.task_2());
  }

}