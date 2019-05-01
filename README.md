# A sample coding test in Javascript

This is a small coding test, based on the "Vending Machine" code
kata. This project gives you a starting point in Javascript. You
should be able to import this into common editors like Atom, Sublime
and Visual Studio Code.

Take a look in the [SPECIFICATION.md](SPECIFICATION.md) file for the
full description of the problem.

## Setting up

As a pre-requisite, you will need to have `Node.js` and `npm`
installed, and of course an editor to edit the solution and tests. The
project is tiny and the dependencies are in in the `package.json` and
associated lock files.

For most common editors, just open this directory as a project - this
works for Atom, Sublime, and Visual Studio Code. When you have the
project open, execute a command line `$ npm install` to fetch the test
framework and Node.js dependencies.

To run the tests, use `$ npm test`. Some editors will let you execute
that inside the editor. There's a single test, and a skeleton vending
machine class, just enough to get you up and running.

## Tips

Writing code in an interview setting can be daunting, but there are
some approaches that can help ease the nerves. Here are some
suggestions to experiment with when you're practicing for a coding
interview.

### Tiny increments

There's a real morale boost that comes from making small, but tangible
steps forward. The more of these you do, however small they seem, the
better you'll feel about how the interview is going. TDD is the best
enabler for this approach. As a small refresher, TDD uses a cycle of
three phases, always starting with RED : a failing test, or failing
compilation:

```
  +--------------------------------+
  | RED: write the smallest amount |
  | of code to make the test fail, +------------+
  | and treat compilation failures |            |
  | as a test failure.             |            |
  +--------------------------------+            |
         ^                                      |
         |                                      v
         |                +-------------------------------------+
         |                | GREEN: write the smallest amount of |
         |                | production code to pass the one     |
         |                | failing test.                       |
         |                +---------------------+---------------+
         |                                      |
         |                                      |
     +---+-----------------------------+        |
     | REFACTOR: clean up the code,    |        |
     | remove duplication, improve     |<-------+
     | names to better express intent. |
     +---------------------------------+
```

### Test lists help

Kent Beck, writing in _Test Driven Development By Example_ talks about
his practice of writing a test list. This is a really good habit. In
an interview setting, this gives you a mini-roadmap that helps keep
you on track.

Try and identify around ten tests that will get you started. It's OK
to re-order and change these as you go along. Aim for _baby steps_ -
the smallest possible functional increment between each test.

Interview tip - doing these on sticky notes let you move them around
and use as a mini-kanban board.

### Git is your friend

It's reassuring to know that if you can into a jam, you can easily
return to a safe point. Git will do that for you. If you are doing
TDD, get into the habit of committing at the end of each
red-green-refactor cycle.

### Do a quick sketch

A sketchy OO model of your solution will help you stay oriented as you
code. A classic OO "cheat" is looking for the nouns in the
specification. The important nouns stand out as being obvious moving
parts of your solution. Draw a sketchy boxes-and-lines diagram of
these. UML isn't necessary, just an outline.

## Resources

The default test is set up to use Mocha, and the assert module from
Node.js. If you want something else, you can always add it to
`package.json` and run a new `$ npm update`.

The most useful documentation to have open in a browser is:

- An overview reminder of the [Mocha test execution model and "getting
  started" example](https://mochajs.org/#getting-started)

- The [assertion syntax from the Node.js assert
  module](https://nodejs.org/api/assert.html)
