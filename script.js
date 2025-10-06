//your JS code here. If required.

    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("Reset");
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const gridItems = document.querySelectorAll(".grid-item");

    // Function to reset all blocks to transparent
    function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }

    // Change color button event
    changeButton.addEventListener("click", () => {
      const blockId = blockInput.value;
      const color = colorInput.value.trim();

      resetGrid();

      const block = document.getElementById(blockId);
      if (block && color) {
        block.style.backgroundColor = color;
      } else {
        alert("Please enter a valid block ID (1-9) and a color.");
      }
    });

    resetButton.addEventListener("click", resetGrid);
