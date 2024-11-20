package com.aoc.aoc;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aoc.aoc.solutions.*;

@RestController
public class SolutionController {

  public SolutionController() {
  }

  @PostMapping("/solutions/01")
  public List<String> solution_01(@RequestBody String ip) {
    Solution s_01 = new S_01(ip);
    return Arrays.asList(s_01.task_1(), s_01.task_2());
  }

  @PostMapping("/solutions/02")
  public List<String> solution_02(@RequestBody String ip) {
    Solution s_02 = new S_02(ip);
    return Arrays.asList(s_02.task_1(), s_02.task_2());
  }

}
