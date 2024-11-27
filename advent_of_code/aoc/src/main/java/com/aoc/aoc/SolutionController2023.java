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

  @PostMapping("/solutions/2023/1")
  public List<String> solution_01(@RequestBody Map<String, String> json) {
    Solution s_01 = new S_01(json.get("message"));
    return Arrays.asList(s_01.task_1(), s_01.task_2());
  }

  @PostMapping("/solutions/2023/2")
  public List<String> solution_02(@RequestBody Map<String, String> json) {
    Solution s_02 = new S_02(json.get("message"));
    return Arrays.asList(s_02.task_1(), s_02.task_2());
  }

  @PostMapping("/solutions/2023/3")
  public List<String> solution_03(@RequestBody Map<String, String> json) {
    Solution s_03 = new S_03(json.get("message"));
    return Arrays.asList(s_03.task_1(), s_03.task_2());
  }

  @PostMapping("/solutions/2023/4")
  public List<String> solution_04(@RequestBody Map<String, String> json) {
    Solution sol = new S_04(json.get("message"));
    return Arrays.asList(sol.task_1(), sol.task_2());
  }

  @PostMapping("/solutions/2023/5")
  public List<String> solution_05(@RequestBody Map<String, String> json) {
    Solution s_05 = new S_05(json.get("message"));
    return Arrays.asList(s_05.task_1(), s_05.task_2());
  }

  @PostMapping("/solutions/2023/6")
  public List<String> solution_06(@RequestBody Map<String, String> json) {
    Solution sol = new S_06(json.get("message"));
    return Arrays.asList(sol.task_1(), sol.task_2());
  }

  @PostMapping("/solutions/2023/7")
  public List<String> solution_07(@RequestBody Map<String, String> json) {
    Solution sol = new S_07(json.get("message"));
    return Arrays.asList(sol.task_1(), sol.task_2());
  }

  @PostMapping("/solutions/2023/{id}")
  public List<String> default_solution() {
    return Arrays.asList("Not yet implemented", "Not yet implemented");
  }

}
