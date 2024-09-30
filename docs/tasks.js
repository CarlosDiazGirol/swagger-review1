module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Task: "Create a task",
        },
        description: "Create task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskBody",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/": {
      get: {
        summary: "",
        tags: ["Read a task"],
        description: "Read task",
        operationId: "readTask",
        parameters: [],
        responses: {
          200: {
            description: "Task read successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/id/{_id}": {
      put: {
        summary: "",
        tags: ["Change a task"],
        description: "Change task",
        operationId: "changeTask",
        parameters: [
          {
            name: "_id",
            in: "path",           
            description: "Id task change"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskBody",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task change successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
      delete: {
        summary: "",
        tags: ["Delete a task"],
        description: "Delete task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",           
            description: "Id task change"
          }
        ],
        responses: {
          200: {
            description: "Task change successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }

    },
    
  },
};
