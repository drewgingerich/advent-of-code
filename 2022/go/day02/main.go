package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	println("Part 1:", partOne())
	println("Part 2:", partTwo())
}

func partOne() int {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	sum := 0

	for scanner.Scan() {
		game := scanner.Text()

		opponentShape := game[0:1]
		playerShape := decodeShape(game[2:3])

		outcome := playGame(opponentShape, playerShape)
		points := score(playerShape, outcome)

		sum += points

	}

	return sum
}

func partTwo() int {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	sum := 0

	for scanner.Scan() {
		game := scanner.Text()

		opponentShape := game[0:1]
		outcome := decodeOutcome(game[2:3])

		playerShape := getPlayerShape(outcome, opponentShape)

		points := score(playerShape, outcome)

		sum += points
	}

	return sum
}

func decodeOutcome(encodedOutcome string) string {
	switch encodedOutcome {
	case "X":
		return "L"
	case "Y":
		return "T"
	case "Z":
		return "W"
	default:
		errMessage := fmt.Sprintf("Unknown encoded outcome %s", encodedOutcome)
		panic(errMessage)
	}

}

func decodeShape(encodedShape string) string {
	switch encodedShape {
	case "X":
		return "A"
	case "Y":
		return "B"
	case "Z":
		return "C"
	default:
		errMessage := fmt.Sprintf("Unknown encoded shape %s", encodedShape)
		panic(errMessage)
	}
}

func playGame(opponentShape string, playerShape string) string {
	if opponentShape == playerShape {
		return "T"
	} else if opponentShape == "A" && playerShape == "B" {
		return "W"
	} else if opponentShape == "A" && playerShape == "C" {
		return "L"
	} else if opponentShape == "B" && playerShape == "A" {
		return "L"
	} else if opponentShape == "B" && playerShape == "C" {
		return "W"
	} else if opponentShape == "C" && playerShape == "A" {
		return "W"
	} else if opponentShape == "C" && playerShape == "B" {
		return "L"
	} else {
		errMessage := fmt.Sprintf("Unknown matchup %s vs %s", opponentShape, playerShape)
		panic(errMessage)
	}
}

func getPlayerShape(outcome string, opponentShape string) string {
	if outcome == "T" {
		return opponentShape
	} else if outcome == "W" && opponentShape == "A" {
		return "B"
	} else if outcome == "W" && opponentShape == "B" {
		return "C"
	} else if outcome == "W" && opponentShape == "C" {
		return "A"
	} else if outcome == "L" && opponentShape == "A" {
		return "C"
	} else if outcome == "L" && opponentShape == "B" {
		return "A"
	} else if outcome == "L" && opponentShape == "C" {
		return "B"
	} else {
		errMessage := fmt.Sprintf("Unknown matchup outcome %s and opponent shape %s", outcome, opponentShape)
		panic(errMessage)
	}
}

func score(shape string, outcome string) int {
	shapeToPoint := map[string]int{
		"A": 1,
		"B": 2,
		"C": 3,
	}

	outcomeToPoint := map[string]int{
		"L": 0,
		"T": 3,
		"W": 6,
	}

	return shapeToPoint[shape] + outcomeToPoint[outcome]
}
