package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	sum := 0
	sums := []int{}

	for scanner.Scan() {
		line := scanner.Text()

		if line == "" {
			sums = append(sums, sum)
			sum = 0
			continue
		}

		calories, err := strconv.Atoi(line)
		if err != nil {
			panic(err)
		}

		sum += calories
	}

	sort.Sort(sort.Reverse(sort.IntSlice(sums)))

	fmt.Println("Part 1:", sums[0])
	fmt.Println("Part 2:", sums[0]+sums[1]+sums[2])
}
