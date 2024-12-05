<div
  className={`fixed text-sm top-0 left-0 h-screen w-[248px] trans shadow-lg z-20 px-4 pt-5 pb-7 dark:text-sidebar-offwhite2 text-sidebar-darkGray relative overflow-hidden bg-sidebar-background dark:bg-Darksidebar-slate-500
    ${!sidebarOpen ? "sidebar" : ""}`}
>
  {/* Header Section */}
  <SidebarHeader userName="Stan A. Garfield" profilePic="/images/user.svg" />

  {/* Main Content */}
  <div className="flex flex-col h-full">
    <div className="flex-grow overflow-y-auto">
      {/* Main content goes here */}
    </div>

    {/* Footer Section */}
    <div className="mt-auto">
      <AnimatePresence>
        {!submenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DraggableCards />
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <div className="flex items-center space-x-2 flex-wrap pb-3">
          <p className="text-sidebar-lightGray text-sm">Usage</p>
          <div className="pt-1">
            <ArrowRightSvg />
          </div>
        </div>
        <div className=" w-full">
          <ProgressBar icon={<TeamsSvg />} label="Teams" current={150} total={1000} />
          <ProgressBar icon={<TeamsSvg />} label="Teams" current={150} total={1000} />
        </div>
      </div>
      <div className="text-sm mt-6">
        <div className="relative">
          {/* Ensure this is relative for modal positioning */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <HelpSvg />
              <p>Help</p>
            </div>

            {/* Help Icon + Modal */}
            <div className="relative inline-block">
              <button
                ref={helpIconRef}
                onClick={() => setModalOpen(!modalOpen)}
                className="pr-6 pt-1 cursor-pointer"
              >
                <Image
                  src="/images/chevron-right.svg"
                  alt="right arrow"
                  width={5}
                  height={4}
                />
              </button>

              {modalOpen && (
                <HelpModal
                  modalOpen={modalOpen}
                  modalPosition={modalPosition}
                  closeModal={() => setModalOpen(false)}
                  helpIconRef={helpIconRef} // Pass helpIconRef
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
