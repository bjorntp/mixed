#include <string.h>
#include <time.h>
#include <stdio.h>
#include <stdlib.h>
int compare(const void* a, const void* b){
  return (*(int*)a - *(int*)b);
}
int main(void)
{
  clock_t begin = clock();
  FILE* input = fopen("input.txt", "r"); 
  long nmbs[1000][15];
  int nmbSize = -1;
  int line = 0;
  char buffer[100];
  while(fgets(buffer, sizeof(input[nmbSize]), input) != NULL){
    nmbSize++;
    int nmbCounter = 1;
    char* endPtr;
    char* token = strtok(buffer, " ");
    nmbs[line][nmbCounter] = strtol(token, &endPtr, 10);
    nmbCounter++;
    token = strtok(NULL, " ");
    while(token != NULL){
      nmbs[line][nmbCounter] = strtol(token, &endPtr, 10);
      token = strtok(NULL, " ");
      nmbCounter++;
    }
    nmbs[line][0] = nmbCounter;
    line++;
  }
  long totalWithoutFix = 0;
  long totalWithFix = 0;
  long direction;
  int safe;
  for (int i = 0; i <= nmbSize; i++) {
    safe = 1;
    if(nmbs[i][1] < nmbs[i][nmbs[i][0]-1]){
      direction = 1;
    } else {
      direction = -1;
    }
    for (int j = 1; j < nmbs[i][0]-1; j++) {
      if(direction == 1 && nmbs[i][j] > nmbs[i][j+1] || direction == -1 && nmbs[i][j] < nmbs[i][j+1]) {
        safe = 0;
      }      
      if(abs((int) (nmbs[i][j] - nmbs[i][j+1])) > 3){
        safe = 0;
      }
      if(nmbs[i][j] == nmbs[i][j+1]){
        safe = 0;
      }
    }
    if(safe == 1){
      totalWithoutFix++;
      totalWithFix++;
    } else {
      int jump = 1;
      safe = 1;
      for (int j = 2; j < nmbs[i][0]-1; j++) {
        if(direction == 1 && nmbs[i][j] > nmbs[i][j+jump] || direction == -1 && nmbs[i][j] < nmbs[i][j+jump]) {
          safe = 0;
        }      
        if(abs((int) (nmbs[i][j] - nmbs[i][j+jump])) > 3){
          safe = 0;
        }
        if(nmbs[i][j] == nmbs[i][j+jump]){
          safe = 0;
        }
      }
      if(safe == 1){
        totalWithFix++;
        goto done;
      }
      safe = 1;
      for (int j = 1; j < nmbs[i][0]-2; j++) {
        if(direction == 1 && nmbs[i][j] > nmbs[i][j+jump] || direction == -1 && nmbs[i][j] < nmbs[i][j+jump]) {
          safe = 0;
        }      
        if(abs((int) (nmbs[i][j] - nmbs[i][j+jump])) > 3){
          safe = 0;
        }
        if(nmbs[i][j] == nmbs[i][j+jump]){
          safe = 0;
        }
      }
      if(safe == 1){
        totalWithFix++;
        goto done;
      }
      safe = 1;
      for (int skipIndex = 2; skipIndex < nmbs[i][0]-1 ; skipIndex++) {
        for (int j = 1; j < nmbs[i][0]-1; j++) {
          jump = 1;
          if(skipIndex == j){
            jump = 2;
          }
          if(direction == 1 && nmbs[i][j] > nmbs[i][j+jump] || direction == -1 && nmbs[i][j] < nmbs[i][j+jump]) {
            safe = 0;
          }      
          if(abs((int) (nmbs[i][j] - nmbs[i][j+jump])) > 3){
            safe = 0;
          }
          if(nmbs[i][j] == nmbs[i][j+jump]){
            safe = 0;
          }
          if(jump == 2){
            j++;
            j++;
          }
        }
        if(safe == 1){
          totalWithFix++;
          goto done;
        }
      }
    done:
    }
  }
  
  clock_t end = clock();
  double time_spent = (double) (end-begin) / CLOCKS_PER_SEC;
  printf("Number of safe lines without fix: %ld \n", totalWithoutFix);
  printf("Number of safe lines with fix: %ld \n", totalWithFix);
  printf("Execution time %lf", time_spent);
}
