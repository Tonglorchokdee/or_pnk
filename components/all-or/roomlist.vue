<template>
  <div style="overflow-x:auto;">
    <table>
      <tr>
        <th></th>
        <th colspan="2">08.00-09.00</th>
        <th colspan="2">09.00-10.00</th>
        <th>11.00-12.00</th>
        <th>12.00-13.00</th>
        <th colspan="2">13.00-14.00</th>
        <th>14.00-15.00</th>
        <th>15.00-16.00</th>
      </tr>
      <tr>
        <td class="room">ห้องผ่าตัด 1</td>
        <td class="front-1"></td>
        <td class="first">
          <v-row>
            <v-col sm="12" class="ma-0 py-0">
              <h6>11111</h6>
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="12" class="ma-0 py-0">N185 : Chronic Kidney Disease, stage 5</v-col>
          </v-row>
        </td>
        <td class="front-2"></td>
        <td class="seceond" colspan="3">
          <v-row>
            <v-col sm="12" class="ma-0 py-0">
              <h6>11111</h6>
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="12" class="ma-0 py-0">N185 : Chronic Kidney Disease, stage 4</v-col>
          </v-row>
        </td>
        <td class="front-3"></td>
        <td class="thirth" colspan="3">
          <v-row>
            <v-col sm="12" class="ma-0 py-0">
              <h6>11111</h6>
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="6" class="ma-0 py-0">
              <v-icon>mdi-account</v-icon>ชื่อ
            </v-col>
            <v-col sm="12" class="ma-0 py-0">N185 : Chronic Kidney Disease, stage 5</v-col>
          </v-row>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "roomlist",
};
</script>

<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  padding: 8px;
  font-family: 'K2D';
}

/* tr:nth-child(even) {
  background-color: #f2f2f2
} */

td.front-1 {
  padding: 2px;
  width: auto;
  height: 4px;
  background: #98ED70;
  border-radius: 5px;
}

td.front-2,
.front-3 {
  padding: 2px;
  width: 2px;
  height: 4px;
  background: #FAD965;
  border-radius: 5px;
}

td.first {
  width: 235px;
  height: 121px;
  background: #CEF0BD;
  border-radius: 5px 0px 0px 5px;
}

td.seceond,
.thirth {
  background: #F6E8B5;
}

h6 {
  font-size: 12px;
  color: #717171;
}

 /* v-col.name{
  font-size: 14px;
  color: #0B2439;
} */

/* scroll bar */
/* width */
::-webkit-scrollbar {
  /* width: 8px; */
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #DCDCDC;
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #82C1EE; 
  border-radius: 4px;
}

</style>
