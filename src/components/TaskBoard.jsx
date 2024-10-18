import Action from "./Action";
import List from "./List";
import Search from "./Search";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {/* Search Box */}
        <Search />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Action  */}
          <Action />
          {/*  List */}
          <List />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
