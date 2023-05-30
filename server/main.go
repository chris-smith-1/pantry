package main

import (
	"fmt"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", getMeals)

	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}
}

func getMeals(w http.ResponseWriter, r *http.Request) {
	fmt.Println("This is me getting the meals.")
}
