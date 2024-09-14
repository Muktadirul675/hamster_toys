<script setup>
import { supabase } from '../supabase/client.js';

async function add(){
  const {error} = await supabase.from('product').insert([
    {name:'Ladder'}
  ])
  console.log(error)
}

</script>

<template>
  <div class="container p-3">
    <div class="row text-white">
      <div class="col-6 rounded p-1">
        <div class="bg-primary rounded p-2">
          <div class="row">
            <div class="col-8">
              Total
            </div>
            <div class="col-2">
              100
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 rounded p-1">
        <div class="bg-primary rounded p-2">
          <div class="row">
            <div class="col-8">
              Shipped
            </div>
            <div class="col-2">
              100
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 rounded p-1">
        <div class="bg-primary rounded p-2">
          <div class="row">
            <div class="col-8">
              Completed
            </div>
            <div class="col-2">
              100
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 rounded p-1">
        <div class="bg-primary rounded p-2">
          <div class="row">
            <div class="col-8">
              Left
            </div>
            <div class="col-2">
              100
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 rounded p-1">
        <div class="bg-primary rounded p-2">
          <div class="row">
            <div class="col-8">
              Cancelled
            </div>
            <div class="col-2">
              100
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="add">Add</button>
</template>
