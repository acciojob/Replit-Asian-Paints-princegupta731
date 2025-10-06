window.addEventListener("DOMContentLoaded", () => {
      const changeButton = document.getElementById("change_button");
      const resetButton = document.getElementById("reset_button");
      const blockInput = document.getElementById("block_id");
      const colorInput = document.getElementById("colour_id");
      const gridItems = document.querySelectorAll(".grid-item");

      // Reset all blocks
      function resetGrid() {
        gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
        });
      }

      // Change color
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

      // Reset button click
      resetButton.addEventListener("click", resetGrid);
    });