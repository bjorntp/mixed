package com.aoc.aoc;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aoc.aoc.solutions.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SolutionController {

  public SolutionController() {
  }

  @PostMapping("/solutions/01")
  public List<String> solution_01(@RequestBody Map<String, String> json) {
    Solution s_01 = new S_01(json.get("message"));
    return Arrays.asList(s_01.task_1(), s_01.task_2());
  }

  @PostMapping("/solutions/02")
  public List<String> solution_02(@RequestBody Map<String, String> json) {
    Solution s_02 = new S_02(json.get("message"));
    return Arrays.asList(s_02.task_1(), s_02.task_2());
  }

  @PostMapping("/solutions/03")
  public List<String> solution_03(@RequestBody Map<String, String> json) {
    Solution s_03 = new S_03(json.get("message"));
    return Arrays.asList(s_03.task_1(), s_03.task_2());
  }

  @PostMapping("/solutions/04")
  public List<String> solution_04(@RequestBody Map<String, String> json) {
    Solution s_04 = new S_04(json.get("message"));
    return Arrays.asList(s_04.task_1(), s_04.task_2());
  }

  @PostMapping("/solutions/05")
  public List<String> solution_05(@RequestBody Map<String, String> json) {
    Solution s_05 = new S_05(json.get("message"));
    return Arrays.asList(s_05.task_1(), s_05.task_2());
  }

  @PostMapping("/solutions/06")
  public List<String> solution_06(@RequestBody Map<String, String> json) {
    Solution s_06 = new S_06(json.get("message"));
    return Arrays.asList(s_06.task_1(), s_06.task_2());
  }

  @PostMapping("/solutions/{id}")
  public List<String> default_solution() {
    return Arrays.asList("Not yet implemented", "Not yet implemented");
  }

}
