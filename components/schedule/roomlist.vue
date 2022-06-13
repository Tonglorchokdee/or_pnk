<template>
    <div>
        <v-list-item-title class="table-header text-h4 mb-1 py-3">
            <i class="mdi mdi-hospital-building"></i>
            ห้องผ่าตัด n</v-list-item-title>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr fixed-header>
                <th class="text-middle">สถานะการผ่าตัด</th>
                <th class="text-middle">ลำดับ</th>
                <th class="text-middle">เวลานัด</th>
                <th class="text-middle">เวลาที่เริ่ม</th>
                <th class="text-middle">ผ่าตัดเสร็จ</th>
                <th class="text-middle">HN</th>
                <th class="text-middle">ชื่อ-นามสกุล</th>
                <th class="text-middle">อายุ</th>
                <th class="text-middle">Ward</th>
                <th class="text-middle">Diagnosis</th>
                <th class="text-middle">ข้าง</th>
                <th class="text-middle">Operation</th>
                <th class="text-middle">Surgeon</th>
                <th class="text-middle">ANES Type</th>
                <th class="text-middle">จอง ICU</th>
                <th class="text-middle">สถานะ ICU</th>
                <th class="text-middle">ผล DTX</th>
                <th class="text-middle">Premed</th>
                <th class="text-middle">ผู้ดูแลเคส</th>
                <th class="text-middle">หมายเหตุ</th>
                <th class="text-middle">ดูข้อมูล</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in operate"
                :key="item.name"
                >
                <td>{{ item.status }}</td>
                <td>{{ item.order }}</td>
                <td>{{ item.appointmentTime }}</td>
                <td>{{ item.startTime }}</td>
                <td>{{ item.endTime }}</td>
                <td>{{ item.hn }}</td>
                <td>{{ item.patientName }}</td>
                <td>{{ item.patientAge }}</td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.ward}}</option>
                        <option value="professional">ค.พิเศษแพทย์ ผู้เชี่ยวชาญ</option>
                        <option value="clinic">คลินิกศัลยกรรม</option>
                    </select>
                </td>
                <td>{{ item.diagnosis }}</td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.zone}}</option>
                        <option value="rt">Rt.</option>
                        <option value="lt">Lt.</option>
                    </select>
                </td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.operation}}</option>
                        <option value="none">-</option>
                        <option value="avf">Rt AVF</option>
                        <option value="offTcc">Off TCC Rt</option>
                    </select>
                </td>
                <td>{{ item.surgeonName }}</td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.anes}}</option>
                        <option value="ga">GA.</option>
                        <option value="ra">RA.</option>
                        <option value="la">LA.</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox">
                </td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.icuStatus}}</option>
                        <option value="none">-</option>
                        <option value="queue1">คิว 1</option>
                        <option value="queue2">คิว 2</option>
                    </select>
                </td>
                <td>{{ item.dtx }}</td>
                <td>
                    <select>        
                        <option selected disabled hidden>{{item.premed}}</option>
                        <option value="ok">OK</option>
                        <option value="wait">รอดูประวัติเก่า</option>
                    </select>
                </td>
                <td>{{ item.caregiverName }}</td>
                <td>{{ item.note }}</td>
                <td>
                    <a :href=item.viewData target="_blank">
                        <i class="view-button mdi mdi-arrow-right-bold-circle"></i>
                    </a>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        operate: [
          {
            status: 'ผ่าตัดเสร็จ',
            order: 1,
            appointmentTime: '8.00 น.',
            startTime: '8.15 น.',
            endTime: '8.45 น.',
            hn: '4727453',
            patientName: 'นาย สุรพล อิสรานุลักษณ์',
            patientAge: '62 ปี',
            ward: 'ค.พิเศษแพทย์ ผู้เชี่ยวชาญ',
            diagnosis: 'Chronic Kidney Disease, stage 5',
            zone: 'Rt.',
            operation: 'Rt AVF',
            surgeonName: 'นพ. ปิติชัย สุพพัตพงศ์',
            anes: 'LA.',
            // icuReserve: 'Checkbox ▢',
            icuStatus: '',
            dtx: '',
            premed: 'OK',
            caregiverName: 'สุภาวดี มั่งมี',
            note: 'Writable: รอเลือด',
            viewData: 'https://www.youtube.com/watch?v=t-PmaY6ivaU'
          },
        ],
      }
    },
  }
</script>

<style>
    .table-header {
        text-align: center;
        background-color: #0c79d9;
        color: white;
        border-radius: 15px 15px 0 0;
    }

    .view-button {
        font-size: 30px;
        color: black;
    }
</style>