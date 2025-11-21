# Tetris Workshop — Step-by-step Instructions

**Repository:** [https://github.com/lbsa71/ai-lab/](https://github.com/lbsa71/ai-lab/)

## Mission

Split into development teams. Build a simple Tetris clone in small, testable steps using TDD and AI assistance.

---

## AI Agent Requirements

This workshop requires access to an AI coding assistant. The most common options are:

* **Cursor** - AI-powered code editor with built-in AI assistance
* **Claude Code** - Claude's coding assistant (available in various IDEs and platforms)

Make sure your dev team has access to one of these AI agents before starting the workshop. You'll use the AI assistant throughout the workshop to help write tests, implement features, and refactor code.

---

## Preparation (before the workshop)

* This repo includes a React/TypeScript scaffold with:

  * Project scaffold (React + TypeScript + Vite)
  * `tests/` folder with Jest configured
  * Basic "Hello World!" app to verify setup
  * `README` with quick run instructions: `npm install && npm test && npm start`
* **Option 1:** Use the provided scaffold — clone the repo and start coding.
* **Option 2:** Explore setting up your own project using AI agents in the shell — choose a different technology stack (e.g., Python with Pygame, or another framework) and ask the AI to help you scaffold it with testing configured.
* Make sure you have a laptop and Node.js or Python installed (depending on your chosen stack).

---

## Workshop setup (5–10 minutes)

1. Split participants into two teams.
2. **Option A (using scaffold):** Each person clones the starter repo: `git clone https://github.com/lbsa71/ai-lab.git` and installs dependencies with `npm install`.
3. **Option B (exploring setup):** Use AI agents in the shell to scaffold your own project with a different technology stack. For example:
   * Python with Pygame: Ask the AI to set up a Python project with Pygame and pytest
   * Or choose another stack: React/TypeScript, vanilla JavaScript, or any other framework you prefer
4. Run the test suite to show passing/failing tests: `npm test` (or `pytest` for Python, etc.)
5. Explain the goal: incremental TDD steps to a playable Tetris.

---

## Rules for the workshop

* Work in small iterations (10–25 minutes each).
* Write a test first, then implement the minimal code to pass the test.
* Use the AI assistant to write or refactor tests & implementation, but review everything.
* Commit after each green test: `git commit -m "feat: pass test for <feature>"`

---

## Iterations (step-by-step tasks)

For each iteration: create one or more focused tests, implement the smallest change to pass them, run tests, commit.

### Iteration 1 — Game board

* **Objective:** Create a 10×20 board data structure and render an empty grid.
* **Tests:** `Board initializes with width 10 and height 20` and `Board cells are empty`.
* **Deliverable:** Visual empty grid on the canvas.

### Iteration 2 — Single falling block (1x1)

* **Objective:** Spawn a 1×1 block at the top center and let it fall one row per tick.
* **Tests:** `spawn places block at top center`, `tick moves block down`.
* **Deliverable:** A square that moves down on each tick.

### Iteration 3 — Stopping & stacking

* **Objective:** Block should stop at bottom and stack when multiple blocks are dropped.
* **Tests:** `block stops at bottom`, `stacking updates board state`.
* **Deliverable:** Blocks accumulate from the bottom up.

### Iteration 4 — Movement & drop

* **Objective:** Move piece left/right with arrow keys and hard-drop with space.
* **Tests:** `move left/right when space available`, `hard drop places piece at lowest valid row`.
* **Deliverable:** Player-controlled horizontal movement and instant drop.

### Iteration 5 — Tetromino shapes

* **Objective:** Replace 1×1 blocks with classic tetrominoes (I, O, T, S, Z, J, L).
* **Tests:** `random piece generator returns valid shape`, `shape occupies correct cells`.
* **Deliverable:** Composite pieces made of 1×1 cells falling.

### Iteration 6 — Rotation

* **Objective:** Rotate pieces (clockwise) with the up arrow.
* **Tests:** `rotation returns expected coordinates`, `rotation respects collisions/walls`.
* **Deliverable:** Pieces rotate and handle simple wall collisions.

### Iteration 7 — Line clear

* **Objective:** Detect full horizontal lines, clear them, and collapse above rows.
* **Tests:** `detect full row`, `clear row and shift above rows down`.
* **Deliverable:** Lines disappear when filled; score increments.

### Iteration 8 — Game over & polish (optional)

* **Objective:** Detect game-over condition and show score/overlay.
* **Tests:** `game over when new piece overlaps existing stack`.
* **Deliverable:** Game-over screen and final score.

---

## Example short prompts for the AI assistant

* "Write a unit test that asserts the board initializes as empty."
* "Implement the smallest Board constructor to pass the test."
* "Refactor the `tick()` method so movement logic is separate from collision detection."
* "Write a test that checks a T tetromino rotates correctly at position (x,y)."

---

## Tips for success

* Keep your iterations short and focused. If you get stuck, try switching to a different micro-task (e.g., write tests for another feature).
* Make small, reviewable commits.
* Use the AI as a pair-programmer — always inspect generated code.

---

## Deliverables

* A working mini-Tetris playable in the browser (or chosen platform).
* A commit history with passing tests at each step.
* One short demo per team (3–5 minutes).

---

Good luck! Keep steps small, tests first, and use the AI to accelerate — not replace — developer judgment.

---

## Quick Reference

* **Repository:** [https://github.com/lbsa71/ai-lab/](https://github.com/lbsa71/ai-lab/)
* **Quick Start:** See [README.md](./README.md) for setup instructions

