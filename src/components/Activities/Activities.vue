<!------------------------------->
<!------ Activities Page -------->
<!------------------------------->
<!-- CSS content -->
<style lang="scss">
    @import "Activities";
</style>

<!-- HTML content -->
<template>
  <div id="activities">

      <!-- summary view section-->
      <section class="summary-view-section">
          <div>
              <a-row>
                  <a-col :span="12">
                      <div><h2>{{currentProject.name}}</h2></div>
                  </a-col>
                  <a-col :span="12" class="text-right">
                      <a-button> <img src="../../assets/images/icons/blue-calendar.svg" class="m-r-5"> Mon, May 25 - Sat, May 31 </a-button>
                      <a-button> <img src="../../assets/images/icons/blue-folder-small.svg" class="m-r-5"> Manage Project </a-button>
                  </a-col>
              </a-row>
          </div>

          <div class="summary-section">
              <a-row>
                  <a-col :span="14">
                      <div class="summary-box">

                      </div>
                  </a-col>
                  <a-col :span="10">
                      <div class="graphics-box"><img src="../../assets/images/others/graphics_seat.svg"></div>
                  </a-col>
              </a-row>
          </div>
      </section>

      <!-- table view section-->
      <section class="table-view-section">
          <div>
              <template>
                  <table class="table-design">
                      <thead>
                          <th v-for="item in columns" :key="item.key">
                              {{item.title}}

                              <template>
                                  <a-tooltip>
                                      <template slot="title">
                                          Earned money
                                      </template>
                                      <img v-if="item.key==='earned'" src="../../assets/images/icons/info.svg">
                                  </a-tooltip>
                              </template>


                          </th>
                      </thead>

                      <tbody v-for="item in activityData" :key="item.id">
                          <th class="day-row" :colspan="columns.length">
                              {{item.day}}
                          </th>
                          <tr v-for="col in item.activities" :key="col.id">
                              <td>{{col.name}}</td>
                              <td>{{col.hoursWorked}}<span class="display-block">{{col.timing}}</span></td>
                              <td>{{col.desktopActivity}}</td>
                              <td>{{col.earned}}</td>
                              <td>Delete</td>
                          </tr>
                      </tbody>
                  </table>
              </template>
          </div>
      </section>

  </div>
</template>


<!-- JS content -->
<script>
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'Hours Worked',
            dataIndex: 'hoursWorked',
            key: 'hoursWorked',
            scopedSlots: { customRender: 'hoursWorked' },
        },
        {
            title: 'Desktop Activity',
            dataIndex: 'desktopActivity',
            key: 'desktopActivity',
        },
        {
            title: 'Earned',
            dataIndex: 'earned',
            key: 'earned'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

    const activityData = [
        {
            "day": "Today",
            "activities": [
                {
                    "key": "1",
                    "name": "Working on updated",
                    "hoursWorked": 32,
                    "desktopActivity": "32 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$43"
                },
                {
                    "key": "2",
                    "name": "Working on updated",
                    "hoursWorked": 2,
                    "desktopActivity": "32 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$43"
                },
                {
                    "key": "3",
                    "name": "Working on updated",
                    "hoursWorked": 32,
                    "desktopActivity": "32 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$43"
                }
            ]
        },
        {
            "day": "Yesterday",
            "activities": [
                {
                    "key": "1",
                    "name": "Working on Dashboard UI",
                    "hoursWorked": 12,
                    "desktopActivity": "24 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$70"
                },
                {
                    "key": "2",
                    "name": "Working on Dashboard UI",
                    "hoursWorked": 12,
                    "desktopActivity": "24 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$70"
                },
                {
                    "key": "3",
                    "name": "Working on Dashboard UI",
                    "hoursWorked": 12,
                    "desktopActivity": "24 Screenshots",
                    "timing": "11:34 PM - 12:23 AM",
                    "earned": "$70"
                }
            ]
        }
    ];
    export default {

        data() {
            return {
                activityData,
                columns,
                currentProject: {
                    name:'Assign.Work'
                }
            };
        }
    };
</script>
