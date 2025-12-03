package main

import (
	"bufio"
	"os"
	"strings"
)

func main() {
	runPartOne()
	runPartTwo()
}

func runPartOne() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	itemCatalog := make(map[string]bool)

	sum := 0

	for scanner.Scan() {
		contents := scanner.Text()

		compartmentSize := len(contents) / 2

		for i := 0; i < compartmentSize; i++ {
			item := string(contents[i])
			itemCatalog[item] = true
		}

		var duplicateItem string

		for i := compartmentSize; i < len(contents); i++ {
			item := string(contents[i])
			_, exists := itemCatalog[item]
			if exists {
				duplicateItem = item
				break
		}

		itemCatalog = make(map[string]bool)

		sum += getItemValue(duplicateItem)
	}

	println("Part 1:", sum)
}

func runPartTwo() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	sum := 0
	itemCounts := make(map[string]int)

	for {
		stopped := scanner.Scan()
		if stopped {
			break
		}

		contents := scanner.Text()
		for i := 0; i < len(contents); i++ {
			item := string(contents[i])

			count, exists := itemCounts[item]
			if !exists {
				itemCounts[item] = 1
				continue
			}

			count += 1
			if count == 3 {
				badgeItem = item
				break
			}

			itemCounts[item] = count
		}

		for scanner.Scan() {
			contents := scanner.Text()

			var badgeItem string

			for i := 0; i < len(contents); i++ {
				item := string(contents[i])

				count, exists := itemCounts[item]
				if !exists {
					itemCounts[item] = 1
					continue
				}

				count += 1
				if count == 3 {
					badgeItem = item
					break
				}

				itemCounts[item] = count
			}

			sum += getItemValue(badgeItem)
			itemCounts = make(map[string]int)
		}
	}
	println("Part 2:", sum)
}

func getItemValue(item string) int {
	values := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return strings.Index(values, item) + 1
}
