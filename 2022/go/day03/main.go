package main

import (
	"bufio"
	"os"
	"strings"
)

const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

func main() {
	runPartOne()
}

func runPartOne() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	catalogue := make(map[string]bool)

	sum := 0

	for scanner.Scan() {
		contents := scanner.Text()

		compartmentSize := len(contents) / 2

		for i := 0; i < compartmentSize; i++ {
			item := string(contents[i])
			catalogue[item] = true
		}

		var duplicateItem string

		for i := compartmentSize; i < len(contents); i++ {
			item := string(contents[i])
			_, exists := catalogue[item]
			if exists {
				duplicateItem = item
				break
			}
		}

		value := strings.Index(values, duplicateItem) + 1

		catalogue = make(map[string]bool)
		sum += value
	}

	println("Part 1:", sum)
}
