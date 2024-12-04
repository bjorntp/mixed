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
  int* l = malloc(1000*sizeof(int));
  int* r = malloc(1000*sizeof(int));
  int nextPosition = 0;
  char* line = malloc(20*sizeof(char));
  long x,y;
  while(fscanf(input, "%li   %li", &x, &y) == 2){
    l[nextPosition] = x;
    r[nextPosition] = y;
    nextPosition++;
  }
  qsort(l, nextPosition, sizeof(int), compare);
  qsort(r, nextPosition, sizeof(int), compare);
  int n = 0;
  int total = 0;
  while(n < nextPosition){
    total += abs(l[n] - r[n]);
    n++;
  }
  n = 0;
  int index_inner = 0;
  int similarity_score = 0;
  int counter;
  while(n < nextPosition){
    counter = 0;
    while(r[index_inner] < l[n]){
      index_inner++;
    }
    while(r[index_inner] == l[n]){
      counter++;
      index_inner++;
    }
    index_inner = index_inner - counter;
    similarity_score += l[n] * counter;
    n++;
  }
  clock_t end = clock();
  double time_spent = (double) (end-begin) / CLOCKS_PER_SEC;
  printf("Total: %d\n", total);
  printf("Similarity score: %d\n", similarity_score);
  printf("Execution time %lf", time_spent);
}
