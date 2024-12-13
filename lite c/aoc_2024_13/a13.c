#include <math.h>
#include <stddef.h>
#include <string.h>
#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <regex.h>
#include <wchar.h>
int main(void)
{
  clock_t startInstant = clock();

  // Read file
  FILE* input = fopen("input.txt", "r"); 
  fseek(input, 0, SEEK_END);
  long fileSize = ftell(input);
  char *fileContent = (char *)malloc(fileSize+1);
  rewind(input);
  size_t bytesRead = fread(fileContent, 1, fileSize, input);

  // Init regular expression

  regex_t regex;
  regmatch_t match;
  const char *pattern = "[0-9]+";
  regcomp(&regex, pattern, REG_EXTENDED);

  const char *cursor = fileContent;
  
  int start, end;
  long total = 0;
  double am, cm, bm, dm, y1, y2;
  while (regexec(&regex, cursor, 1, &match, 0 ) == 0) {
    start = match.rm_so;
    end = match.rm_eo;
    am = atof(cursor+start);
    cursor += end;
    if(regexec(&regex, cursor, 1, &match, 0) != 0){
      break;
    };
    start = match.rm_so;
    end = match.rm_eo;
    cm = atof(cursor+start);
    cursor += end;
    if(regexec(&regex, cursor, 1, &match, 0) != 0){
      break;
    };
    start = match.rm_so;
    end = match.rm_eo;
    bm = atof(cursor+start);
    cursor += end;
    if(regexec(&regex, cursor, 1, &match, 0) != 0){
      break;
    };
    start = match.rm_so;
    end = match.rm_eo;
    dm = atof(cursor+start);
    cursor += end;
    if(regexec(&regex, cursor, 1, &match, 0) != 0){
      break;
    };
    start = match.rm_so;
    end = match.rm_eo;
    y1 = atof(cursor+start) + 10000000000000;
    cursor += end;
    if(regexec(&regex, cursor, 1, &match, 0) != 0){
      break;
    };
    start = match.rm_so;
    end = match.rm_eo;
    y2 = atof(cursor+start) + 10000000000000;
    cursor += end;

    double det = am * dm - bm * cm;
    double ami = dm / det;
    double bmi = -bm / det;
    double cmi = -cm / det;
    double dmi = am / det;
    double A = ami * y1 + bmi * y2;
    double B = cmi * y1 + dmi * y2;
    if ((fmod(A, 1) < 0.001 || fmod(A, 1.0) > 0.99)
        && (fmod(B, 1) < 0.001 || fmod(B, 1.0) > 0.99)) {
      total += A * 3 + B;
    }
  }
  clock_t endInstant = clock();
  double time_spent = (double) (endInstant- startInstant) / CLOCKS_PER_SEC;
  printf("Total: %ld\nExecution time: %lf seconds\n", total, time_spent);
  free(fileContent);
}
