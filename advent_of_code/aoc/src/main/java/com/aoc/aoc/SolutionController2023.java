package com.aoc.aoc;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aoc.aoc.solutions_2023.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SolutionController2023 {

  public SolutionController2023() {
  }

  @PostMapping("/solutions/2023/01")
  public List<String> solution_01(@RequestBody Map<String, String> json) {
    Solution s_01 = new S_01(json.get("message"));
    return Arrays.asList(s_01.task_1(), s_01.task_2());
  }

  @PostMapping("/solutions/2023/{id}")
  public List<String> default_solution() {
    return Arrays.asList("Not yet implemented", "Not yet implemented");
  }

}
